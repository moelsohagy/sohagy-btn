import { openBlock as r, createElementBlock as _, createElementVNode as l, toDisplayString as c } from "vue";
const d = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, o] of e)
    n[s] = o;
  return n;
}, p = {
  name: "SohagyBtn",
  props: {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" }
  },
  methods: {
    alert() {
      alert(`${this.title} - ${this.subtitle}`);
    }
  }
}, u = { class: "title" }, y = { class: "subtitle" };
function g(t, e, n, s, o, a) {
  return r(), _("button", {
    class: "sohagy-btn",
    onClick: e[0] || (e[0] = (...i) => a.alert && a.alert(...i))
  }, [
    l("span", u, c(n.title), 1),
    l("span", y, c(n.subtitle), 1)
  ]);
}
const f = /* @__PURE__ */ d(p, [["render", g], ["__scopeId", "data-v-7da6deae"]]), m = {
  install: (t, e) => {
    t.component("SohagyBtn", f);
  }
};
export {
  m as default
};
