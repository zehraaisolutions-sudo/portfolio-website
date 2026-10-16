CREATE TABLE public.contact_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 service text NOT NULL DEFAULT '',
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
 request_hash text NOT NULL
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_submissions_request_time ON public.contact_submissions(request_hash, created_at);
CREATE OR REPLACE FUNCTION public.submit_contact(_name text, _email text, _service text, _message text, _request_hash text)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE new_id uuid;
BEGIN
 PERFORM pg_advisory_xact_lock(hashtext(_request_hash));
 IF (SELECT count(*) FROM public.contact_submissions WHERE request_hash = _request_hash AND created_at > now() - interval '15 minutes') >= 3 THEN
  RAISE EXCEPTION 'CONTACT_RATE_LIMIT';
 END IF;
 INSERT INTO public.contact_submissions(name,email,service,message,request_hash) VALUES (_name,_email,_service,_message,_request_hash) RETURNING id INTO new_id;
 RETURN new_id;
END;
$$;
REVOKE ALL ON FUNCTION public.submit_contact(text,text,text,text,text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_contact(text,text,text,text,text) TO service_role;