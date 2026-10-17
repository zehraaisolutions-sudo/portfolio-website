<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Use dedicated TanStack routes for Home, About, Services, AI Fields, Work, Certificates, and Contact so each major portfolio area has a shareable URL and unique metadata.
- Keep shared navigation, background, footer, scroll controls, and contact actions in the root layout so they remain consistent across all pages.

- Keep supplementary profile content in a separate browser-safe data module; existing portfolio records remain intact to preserve verified URLs.
- Use homepage anchors alongside retained content routes so in-page navigation never removes shareable pages.
- Public contact submissions are validated server-side, privately stored through a service-only atomic rate-limited function, and never reported as emailed until a verified sender is wired.
