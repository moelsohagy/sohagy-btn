import { openBlock as c, createElementBlock as _, createElementVNode as s, toDisplayString as r, renderSlot as d } from "vue";
const u = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, l] of e)
    n[o] = l;
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
function b(t, e, n, o, l, a) {
  return c(), _("div", null, [
    s("button", {
      class: "sohagy-btn",
      onClick: e[0] || (e[0] = (...i) => a.alert && a.alert(...i))
    }, [
      s("span", f, r(n.title), 1),
      s("span", y, r(n.subtitle), 1),
      d(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const g = /* @__PURE__ */ u(p, [["render", b], ["__scopeId", "data-v-5124ab4b"]]), m = {
  install: (t, e) => {
    t.component("SohagyBtn", g);
  }
};
export {
  m as default
};
