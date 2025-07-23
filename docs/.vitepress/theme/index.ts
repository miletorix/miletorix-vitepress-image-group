import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import 'virtual:group-icons.css'

import { ImageGroup } from '@miletorix/vitepress-image-group'
import '@miletorix/vitepress-image-group/style.css'

import BackToTopButton from '@miletorix/vitepress-back-to-top-button' //[!code ++]
import '@miletorix/vitepress-back-to-top-button/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app)
    ctx.app.component('ImageGroup', ImageGroup)
  }
}