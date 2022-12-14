import { presetAttributify, presetIcons, presetUno } from 'unocss'
import UnocssIcons from '@unocss/preset-icons'

export default {
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        UnocssIcons({
            prefix: 'i-',
            extraProperties: {
                'display': 'block',
                'font-size': '1.5rem'
            }
        })
    ],
    theme: {
        colors: {
            primary: '#2962FF',
            success: '#00C853',
            warning: '#FFAB00',
            danger: '#DD2C00',
            strong: {
                light: '#303133',
                dark: '#e5eaf3'
            },
            normal: {
                light: '#606266',
                dark: '#cfd3dc'
            },
            secondary: {
                light: '#999999',
                dark: '#A3A6AD'
            },
            disable: {
                light: '#C0C4CC',
                dark: '#6C6E72'
            },
            screen: {
                light: '#f6f6f6',
                dark: '#202123'
            },
            container: {
                light: '#ffffff',
                dark: '#2f3133'
            }
        }
    },
    shortcuts: [
        {
            'color-primary': '!text-primary-light !dark:text-primary-dark',
            'color-success': '!text-success-light !dark:text-success-dark',
            'color-warning': '!text-warning-light !dark:text-warning-dark',
            'color-danger': '!text-danger-light !dark:text-danger-dark',
            'color-strong': '!text-strong-light !dark:text-strong-dark',
            'color-normal': '!text-normal-light !dark:text-normal-dark',
            'color-secondary': '!text-secondary-light !dark:text-secondary-dark',
            'color-disable': '!text-disable-light !dark:text-disable-dark',
            'color-container': '!text-container-light !dark:text-container-dark',
            'color-light': '!text-light-50'
        },
        {
            'bgc-primary': '!bg-primary !dark:bg-primary',
            'bgc-success': '!bg-success !dark:bg-success',
            'bgc-warning': '!bg-warning !dark:bg-warning',
            'bgc-danger': '!bg-danger !dark:bg-danger',
            'bgc-screen': '!bg-screen-light !dark:bg-screen-dark',
            'bgc-strong': '!bg-strong-light !dark:bg-strong-dark',
            'bgc-normal': '!bg-normal-light !dark:bg-normal-dark',
            'bgc-secondary': '!bg-secondary-light !dark:bg-secondary-dark',
            'bgc-container': '!bg-container-light !dark:bg-container-dark',
            'bgc-transparent': '!bg-transparent'
        },
        {
            'flex-center': '!display-flex !justify-center !items-center',
            'flex-between': '!display-flex !justify-between !items-center',
            'flex-start': '!display-flex !justify-start !items-center',
            'flex-end': '!display-flex !justify-end !items-center'
        },
        {
            'margin-center': '!m-x-auto',
            'transition-duration': '!transition-duration-333ms',
            'transition-none': '!transition-duration-0ms'
        }
    ],
    rules: [
        ['position-center', {
            'position': 'absolute',
            'left': '50%',
            'top': '50%',
            'transform': 'translateX(-50%) translateY(-50%)'
        }],
        ['one-line', {
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            'white-space': 'nowrap'
        }]
    ]
}