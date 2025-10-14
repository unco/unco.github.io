import { c as create_ssr_component, e as escape } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `blockquote.svelte-1yk465o.svelte-1yk465o{border-left:3px solid #e95420;margin:1.5rem 0;padding-left:1rem;font-style:normal}blockquote.svelte-1yk465o em.svelte-1yk465o{font-style:normal}.btn.svelte-1yk465o.svelte-1yk465o{font-family:'Ubuntu Sans', sans-serif;border:1px solid #111;padding:8px 12px;border-radius:0;outline:none;background-color:#fff;text-decoration:none;color:#000;cursor:pointer;white-space:nowrap}.btn.svelte-1yk465o.svelte-1yk465o:hover{background-color:#fff}.sidepanel.svelte-1yk465o .p-modal__close.svelte-1yk465o{position:absolute;top:10px;right:10px;background-color:#fff;background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nIzAwMCcgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNMTMuMDQxIDEuODk4bDEuMDYgMS4wNkw5LjA2MiA4bDUuMDQgNS4wNDItMS4wNiAxLjA2TDggOS4wNjIgMi45NiAxNC4xbC0xLjA2LTEuMDZMNi45MzggOCAxLjkgMi45NmwxLjA2LTEuMDYgNS4wNCA1LjA0eicvPjwvc3ZnPg==");background-position:center;background-repeat:no-repeat;background-size:1rem;border:0;box-sizing:content-box;height:1rem;margin:0;margin-top:1rem;padding:.5rem;text-indent:-999em;width:1rem;cursor:pointer}.sidepanel.svelte-1yk465o .p-modal__close.svelte-1yk465o:hover{background-color:#f2f2f2}a.svelte-1yk465o.svelte-1yk465o{color:#06c;text-decoration:none}.p-chip.svelte-1yk465o.svelte-1yk465o{background-color:#f2f2f2;border:1.5px solid #707070;transition-duration:.1s;transition-property:background-color, border-color;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);align-items:baseline;border-radius:1rem;display:inline-flex;margin:0 .5rem 0 0;max-width:100%;padding:calc(.25rem - 1.5px) .5rem;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:calc(1.5px - .375rem);white-space:nowrap;font-size:12px}.sidepanel.svelte-1yk465o.svelte-1yk465o{position:fixed;top:0;right:0;width:400px;height:100%;background-color:#fff;box-shadow:-2px 0 5px rgba(0,0,0,0.1);padding:20px;overflow-y:auto;z-index:1000}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let question = { question: "", category: "" };
  $$result.css.add(css);
  return `<h1>PRISM UX design excellence framework </h1>
<blockquote class="svelte-1yk465o"><em class="svelte-1yk465o">${escape(question.question)}</em> <br> <button class="p-chip svelte-1yk465o">${escape(question.category)}</button></blockquote>

<button class="btn svelte-1yk465o">New question</button>



${``}`;
});
export {
  Page as default
};
