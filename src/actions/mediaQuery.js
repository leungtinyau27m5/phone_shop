import useMediaQuery from '@material-ui/core/useMediaQuery'


export const MATCH_XS = () => useMediaQuery('(min-width: 0px)')
export const MATCH_SM = () => useMediaQuery('(min-width: 600px)')
export const MATCH_MD = () => useMediaQuery('(min-width: 960px)')
export const MATCH_LG = () => useMediaQuery('(min-width: 1280px)')
export const MATCH_XL = () => useMediaQuery('(min-width: 1920px)')