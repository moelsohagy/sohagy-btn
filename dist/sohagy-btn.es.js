import { openBlock as i, createElementBlock as _, createElementVNode as l, toDisplayString as r, renderSlot as d } from "vue";
const u = (t, e) => {
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
}, f = { class: "title" }, y = { class: "subtitle" };
function g(t, e, n, s, o, a) {
  return i(), _("button", {
    class: "sohagy-btn",
    onClick: e[0] || (e[0] = (...c) => a.alert && a.alert(...c))
  }, [
    l("span", f, r(n.title), 1),
    l("span", y, r(n.subtitle), 1),
    d(t.$slots, "default", {}, void 0, !0)
  ]);
}
const h = /* @__PURE__ */ u(p, [["render", g], ["__scopeId", "data-v-e7cad789"]]), S = {
  install: (t, e) => {
    t.component("SohagyBtn", h);
  }
};
export {
  S as default
};
