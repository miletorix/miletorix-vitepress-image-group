/// <reference types="C:/Users/user1/Desktop/miletorix-vitepress-image-group/packages/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="C:/Users/user1/Desktop/miletorix-vitepress-image-group/packages/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
const props = defineProps();
const computedType = computed(() => {
    if (props.type && props.type !== 'auto')
        return props.type;
    const count = props.sources.length;
    if (count === 1)
        return 'big';
    if (count === 2)
        return 'double';
    return 'icon';
});
function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
const computedAlt = computed(() => {
    const base = props.caption || props.alt || `ImageGroup - ${computedType.value}`;
    return escapeHTML(base);
});
const imageClass = computed(() => computedType.value === 'manual' ? 'image-preview-manual' : `image-preview-${computedType.value}`);
const containerClass = computed(() => `image-preview-div-for-${computedType.value}`);
const imageStyle = computed(() => {
    if (computedType.value === 'manual' && props.width) {
        return { width: props.width, height: 'auto' };
    }
    return {};
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['image-group-images']} */ ;
/** @type {__VLS_StyleScopedClasses['image-preview-div-for-double']} */ ;
/** @type {__VLS_StyleScopedClasses['image-group-images']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_ctx.containerClass) },
});
if (__VLS_ctx.computedType === 'icon') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "image-group-images icon-group" },
    });
    /** @type {__VLS_StyleScopedClasses['image-group-images']} */ ;
    /** @type {__VLS_StyleScopedClasses['icon-group']} */ ;
    for (const [src, index] of __VLS_vFor((__VLS_ctx.sources))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            key: (index),
            src: (src),
            alt: (__VLS_ctx.computedAlt),
            ...{ class: "image-preview-icon" },
            loading: "lazy",
        });
        /** @type {__VLS_StyleScopedClasses['image-preview-icon']} */ ;
        // @ts-ignore
        [containerClass, computedType, sources, computedAlt,];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "image-group-images" },
    });
    /** @type {__VLS_StyleScopedClasses['image-group-images']} */ ;
    for (const [src, index] of __VLS_vFor((__VLS_ctx.sources))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
            key: (index),
            src: (src),
            alt: (__VLS_ctx.computedAlt),
            ...{ class: (__VLS_ctx.imageClass) },
            ...{ style: (__VLS_ctx.imageStyle) },
            loading: "lazy",
        });
        // @ts-ignore
        [sources, computedAlt, imageClass, imageStyle,];
    }
}
if (__VLS_ctx.caption) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "image-group-caption" },
    });
    /** @type {__VLS_StyleScopedClasses['image-group-caption']} */ ;
    (__VLS_ctx.caption);
}
// @ts-ignore
[caption, caption,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
