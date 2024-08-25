import __nuxt_component_0 from './progressbar-DZw_Ga-n.mjs';
import { useSSRContext, defineComponent, computed, ref, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "planetCard",
  __ssrInlineRender: true,
  props: {
    planet: {}
  },
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const props = __props;
    const enemyProgress = computed(() => {
      if (props.planet.expireDateTime) {
        const date = props.planet.expireDateTime || 0;
        const startDate = new Date(date * 1e3 - 24 * 60 * 60 * 1e3).getTime();
        const currentDate = (/* @__PURE__ */ new Date()).getTime() - startDate;
        const endDate = date * 1e3 - startDate;
        return Math.min(100 * currentDate / endDate, 100);
      } else {
        return 0;
      }
    });
    const terminid = ref(false);
    const automaton = ref(false);
    const isDefense = ((_a = props.planet) == null ? void 0 : _a.defense) === 1;
    const biome = ([__temp, __restore] = withAsyncContext(() => {
      var _a2;
      return JSON.parse((_a2 = props.planet) == null ? void 0 : _a2.biome);
    }), __temp = await __temp, __restore(), __temp);
    terminid.value = ((_b = props.planet) == null ? void 0 : _b.faction) === "Terminids";
    automaton.value = ((_c = props.planet) == null ? void 0 : _c.faction) === "Automatons";
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d, _e, _f, _g;
      const _component_Progressbar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["planet-card-container", { terminid: unref(terminid), automaton: unref(automaton) }]
      }, _attrs))} data-v-18e1f248><div class="planet-name" data-v-18e1f248><h3 data-v-18e1f248>${ssrInterpolate(((_a2 = _ctx.planet) == null ? void 0 : _a2.name) || "Unknown planet")}</h3></div>`);
      _push(ssrRenderComponent(_component_Progressbar, {
        class: ["attack-progress-bar", { "defense-progress-bar": isDefense }],
        progress: (_b2 = _ctx.planet) == null ? void 0 : _b2.percentage,
        faction: (_c2 = _ctx.planet) == null ? void 0 : _c2.faction
      }, null, _parent));
      if (isDefense) {
        _push(ssrRenderComponent(_component_Progressbar, {
          class: "defense-progress-bar",
          progress: unref(enemyProgress),
          faction: (_d = _ctx.planet) == null ? void 0 : _d.faction
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-18e1f248><strong data-v-18e1f248>${ssrInterpolate(Math.trunc((_e = _ctx.planet) == null ? void 0 : _e.percentage) || 0)}%</strong> ${ssrInterpolate(isDefense ? "DEFENDED" : "LIBERATED")}</p><div class="planet-info" data-v-18e1f248><p class="biome" data-v-18e1f248>Biome: ${ssrInterpolate(((_f = unref(biome)) == null ? void 0 : _f.slug) || "Unknown")}</p><p class="players" data-v-18e1f248>${ssrInterpolate(((_g = _ctx.planet) == null ? void 0 : _g.players) || 0)} active Helldivers</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/planets/planetCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PlanetCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18e1f248"]]);

export { PlanetCard as P };
//# sourceMappingURL=planetCard-0V6kV9C6.mjs.map
