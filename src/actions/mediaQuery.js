import useMediaQuery from '@material-ui/core/useMediaQuery'


export const MATCH_XS = () => useMediaQuery('(min-width: 0px)') ? true : false
export const MATCH_SM = () => useMediaQuery('(min-width: 600px)') ? true : false
export const MATCH_MD = () => useMediaQuery('(min-width: 960px)') ? true : false
export const MATCH_LG = () => useMediaQuery('(min-width: 1280px)') ? true : false
export const MATCH_XL = () => useMediaQuery('(min-widt: 1920px)') ? true : false