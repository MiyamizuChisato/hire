import { CODE_EXP, EMAIL_EXP, NICKNAME_EXP, PASSWD_EXP } from './regexp.js'

const requiredTips = '必须填写'
const patternTips = '格式错误'
export const EMAIL_RULE = [
    v => !!v || requiredTips,
    v => EMAIL_EXP.test(v) || patternTips
]
export const PASSWD_RULE = [
    v => !!v || requiredTips,
    v => PASSWD_EXP.test(v) || patternTips
]
export const NICKNAME_RULE = [
    v => !!v || requiredTips,
    v => NICKNAME_EXP.test(v) || patternTips
]
export const CODE_RULE = [
    v => !!v || requiredTips,
    v => CODE_EXP.test(v) || patternTips
]
