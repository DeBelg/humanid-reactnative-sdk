import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const fonts = {
  base: 'Lato-Regular',
  bold: 'Lato-Bold',
  thin: 'Lato-Thin'
};

const colors = {
  primary: '#075070',
  orange: '#F4C464',
  white: '#FFFFFF',
  gray: '#A2A2A2',
  graySmooth: '#E0E0E0',
  gray400: '#BDBDBD',
  black: '#333333'
};

const images = {
  logoIcon: require('../assets/img/logo-icon.png'),
  logoText: require('../assets/img/logo-text.png'),
  logoOutline: require('../assets/img/logo-outline.png'),
  logoLight: require('../assets/img/logo-light.png'),
  arrowDown: require('../assets/img/arrow_down.png')
};

const flags = {
  ad: require('../assets/img/ad_optimized.png'),
  ae: require('../assets/img/ae_optimized.png'),
  af: require('../assets/img/af_optimized.png'),
  ag: require('../assets/img/ag_optimized.png'),
  ai: require('../assets/img/ai_optimized.png'),
  al: require('../assets/img/al_optimized.png'),
  am: require('../assets/img/am_optimized.png'),
  ao: require('../assets/img/ao_optimized.png'),
  ar: require('../assets/img/ar_optimized.png'),
  as: require('../assets/img/as_optimized.png'),
  at: require('../assets/img/at_optimized.png'),
  au: require('../assets/img/au_optimized.png'),
  aw: require('../assets/img/aw_optimized.png'),
  ax: require('../assets/img/ax_optimized.png'),
  az: require('../assets/img/az_optimized.png'),
  ba: require('../assets/img/ba_optimized.png'),
  bb: require('../assets/img/bb_optimized.png'),
  bd: require('../assets/img/bd_optimized.png'),
  be: require('../assets/img/be_optimized.png'),
  bf: require('../assets/img/bf_optimized.png'),
  bg: require('../assets/img/bg_optimized.png'),
  bh: require('../assets/img/bh_optimized.png'),
  bi: require('../assets/img/bi_optimized.png'),
  bj: require('../assets/img/bj_optimized.png'),
  bl: require('../assets/img/bl_optimized.png'),
  bm: require('../assets/img/bm_optimized.png'),
  bn: require('../assets/img/bn_optimized.png'),
  bo: require('../assets/img/bo_optimized.png'),
  bq: require('../assets/img/bq_optimized.png'),
  br: require('../assets/img/br_optimized.png'),
  bs: require('../assets/img/bs_optimized.png'),
  bt: require('../assets/img/bt_optimized.png'),
  bw: require('../assets/img/bw_optimized.png'),
  by: require('../assets/img/by_optimized.png'),
  bz: require('../assets/img/bz_optimized.png'),
  ca: require('../assets/img/ca_optimized.png'),
  cc: require('../assets/img/cc_optimized.png'),
  cd: require('../assets/img/cd_optimized.png'),
  cf: require('../assets/img/cf_optimized.png'),
  cg: require('../assets/img/cg_optimized.png'),
  ch: require('../assets/img/ch_optimized.png'),
  ci: require('../assets/img/ci_optimized.png'),
  ck: require('../assets/img/ck_optimized.png'),
  cl: require('../assets/img/cl_optimized.png'),
  cm: require('../assets/img/cm_optimized.png'),
  cn: require('../assets/img/cn_optimized.png'),
  co: require('../assets/img/co_optimized.png'),
  cr: require('../assets/img/cr_optimized.png'),
  cu: require('../assets/img/cu_optimized.png'),
  cv: require('../assets/img/cv_optimized.png'),
  cw: require('../assets/img/cw_optimized.png'),
  cx: require('../assets/img/cx_optimized.png'),
  cy: require('../assets/img/cy_optimized.png'),
  cz: require('../assets/img/cz_optimized.png'),
  de: require('../assets/img/de_optimized.png'),
  dj: require('../assets/img/dj_optimized.png'),
  dk: require('../assets/img/dk_optimized.png'),
  dm: require('../assets/img/dm_optimized.png'),
  do: require('../assets/img/do_optimized.png'),
  dz: require('../assets/img/dz_optimized.png'),
  ec: require('../assets/img/ec_optimized.png'),
  ee: require('../assets/img/ee_optimized.png'),
  eg: require('../assets/img/eg_optimized.png'),
  eh: require('../assets/img/eh_optimized.png'),
  er: require('../assets/img/er_optimized.png'),
  es: require('../assets/img/es_optimized.png'),
  et: require('../assets/img/et_optimized.png'),
  fi: require('../assets/img/fi_optimized.png'),
  fj: require('../assets/img/fj_optimized.png'),
  fk: require('../assets/img/fk_optimized.png'),
  fm: require('../assets/img/fm_optimized.png'),
  fo: require('../assets/img/fo_optimized.png'),
  fr: require('../assets/img/fr_optimized.png'),
  ga: require('../assets/img/ga_optimized.png'),
  gb: require('../assets/img/gb_optimized.png'),
  gd: require('../assets/img/gd_optimized.png'),
  ge: require('../assets/img/ge_optimized.png'),
  gf: require('../assets/img/gf_optimized.png'),
  gg: require('../assets/img/gg_optimized.png'),
  gh: require('../assets/img/gh_optimized.png'),
  gi: require('../assets/img/gi_optimized.png'),
  gm: require('../assets/img/gm_optimized.png'),
  gn: require('../assets/img/gn_optimized.png'),
  gp: require('../assets/img/gp_optimized.png'),
  gq: require('../assets/img/gq_optimized.png'),
  gr: require('../assets/img/gr_optimized.png'),
  gt: require('../assets/img/gt_optimized.png'),
  gu: require('../assets/img/gu_optimized.png'),
  gw: require('../assets/img/gw_optimized.png'),
  gy: require('../assets/img/gy_optimized.png'),
  hk: require('../assets/img/hk_optimized.png'),
  hn: require('../assets/img/hn_optimized.png'),
  hr: require('../assets/img/hr_optimized.png'),
  ht: require('../assets/img/ht_optimized.png'),
  hu: require('../assets/img/hu_optimized.png'),
  id: require('../assets/img/id_optimized.png'),
  ie: require('../assets/img/ie_optimized.png'),
  il: require('../assets/img/il_optimized.png'),
  im: require('../assets/img/im_optimized.png'),
  in: require('../assets/img/in_optimized.png'),
  io: require('../assets/img/io_optimized.png'),
  iq: require('../assets/img/iq_optimized.png'),
  ir: require('../assets/img/ir_optimized.png'),
  is: require('../assets/img/is_optimized.png'),
  it: require('../assets/img/it_optimized.png'),
  je: require('../assets/img/je_optimized.png'),
  jm: require('../assets/img/jm_optimized.png'),
  jo: require('../assets/img/jo_optimized.png'),
  jp: require('../assets/img/jp_optimized.png'),
  ke: require('../assets/img/ke_optimized.png'),
  kg: require('../assets/img/kg_optimized.png'),
  kh: require('../assets/img/kh_optimized.png'),
  ki: require('../assets/img/ki_optimized.png'),
  km: require('../assets/img/km_optimized.png'),
  kn: require('../assets/img/kn_optimized.png'),
  kp: require('../assets/img/kp_optimized.png'),
  kr: require('../assets/img/kr_optimized.png'),
  ks: require('../assets/img/ks_optimized.png'),
  kw: require('../assets/img/kw_optimized.png'),
  ky: require('../assets/img/ky_optimized.png'),
  kz: require('../assets/img/kz_optimized.png'),
  la: require('../assets/img/la_optimized.png'),
  lb: require('../assets/img/lb_optimized.png'),
  lc: require('../assets/img/lc_optimized.png'),
  li: require('../assets/img/li_optimized.png'),
  lk: require('../assets/img/lk_optimized.png'),
  lr: require('../assets/img/lr_optimized.png'),
  ls: require('../assets/img/ls_optimized.png'),
  lt: require('../assets/img/lt_optimized.png'),
  lu: require('../assets/img/lu_optimized.png'),
  lv: require('../assets/img/lv_optimized.png'),
  ly: require('../assets/img/ly_optimized.png'),
  ma: require('../assets/img/ma_optimized.png'),
  mc: require('../assets/img/mc_optimized.png'),
  md: require('../assets/img/md_optimized.png'),
  me: require('../assets/img/me_optimized.png'),
  mf: require('../assets/img/mf_optimized.png'),
  mg: require('../assets/img/mg_optimized.png'),
  mh: require('../assets/img/mh_optimized.png'),
  mk: require('../assets/img/mk_optimized.png'),
  ml: require('../assets/img/ml_optimized.png'),
  mm: require('../assets/img/mm_optimized.png'),
  mn: require('../assets/img/mn_optimized.png'),
  mo: require('../assets/img/mo_optimized.png'),
  mp: require('../assets/img/mp_optimized.png'),
  mq: require('../assets/img/mq_optimized.png'),
  mr: require('../assets/img/mr_optimized.png'),
  ms: require('../assets/img/ms_optimized.png'),
  mt: require('../assets/img/mt_optimized.png'),
  mu: require('../assets/img/mu_optimized.png'),
  mv: require('../assets/img/mv_optimized.png'),
  mw: require('../assets/img/mw_optimized.png'),
  mx: require('../assets/img/mx_optimized.png'),
  my: require('../assets/img/my_optimized.png'),
  mz: require('../assets/img/mz_optimized.png'),
  na: require('../assets/img/na_optimized.png'),
  nc: require('../assets/img/nc_optimized.png'),
  ne: require('../assets/img/ne_optimized.png'),
  nf: require('../assets/img/nf_optimized.png'),
  ng: require('../assets/img/ng_optimized.png'),
  ni: require('../assets/img/ni_optimized.png'),
  nl: require('../assets/img/nl_optimized.png'),
  no: require('../assets/img/no_optimized.png'),
  np: require('../assets/img/np_optimized.png'),
  nr: require('../assets/img/nr_optimized.png'),
  nu: require('../assets/img/nu_optimized.png'),
  nz: require('../assets/img/nz_optimized.png'),
  om: require('../assets/img/om_optimized.png'),
  pa: require('../assets/img/pa_optimized.png'),
  pe: require('../assets/img/pe_optimized.png'),
  pf: require('../assets/img/pf_optimized.png'),
  pg: require('../assets/img/pg_optimized.png'),
  ph: require('../assets/img/ph_optimized.png'),
  pk: require('../assets/img/pk_optimized.png'),
  pl: require('../assets/img/pl_optimized.png'),
  pm: require('../assets/img/pm_optimized.png'),
  pr: require('../assets/img/pr_optimized.png'),
  ps: require('../assets/img/ps_optimized.png'),
  pt: require('../assets/img/pt_optimized.png'),
  pw: require('../assets/img/pw_optimized.png'),
  py: require('../assets/img/py_optimized.png'),
  qa: require('../assets/img/qa_optimized.png'),
  re: require('../assets/img/re_optimized.png'),
  ro: require('../assets/img/ro_optimized.png'),
  rs: require('../assets/img/rs_optimized.png'),
  ru: require('../assets/img/ru_optimized.png'),
  rw: require('../assets/img/rw_optimized.png'),
  sa: require('../assets/img/sa_optimized.png'),
  sb: require('../assets/img/sb_optimized.png'),
  sc: require('../assets/img/sc_optimized.png'),
  sd: require('../assets/img/sd_optimized.png'),
  se: require('../assets/img/se_optimized.png'),
  sg: require('../assets/img/sg_optimized.png'),
  sh: require('../assets/img/sh_optimized.png'),
  si: require('../assets/img/si_optimized.png'),
  sj: require('../assets/img/sj_optimized.png'),
  sk: require('../assets/img/sk_optimized.png'),
  sl: require('../assets/img/sl_optimized.png'),
  sm: require('../assets/img/sm_optimized.png'),
  sn: require('../assets/img/sn_optimized.png'),
  so: require('../assets/img/so_optimized.png'),
  sr: require('../assets/img/sr_optimized.png'),
  ss: require('../assets/img/ss_optimized.png'),
  st: require('../assets/img/st_optimized.png'),
  sv: require('../assets/img/sv_optimized.png'),
  sx: require('../assets/img/sx_optimized.png'),
  sy: require('../assets/img/sy_optimized.png'),
  sz: require('../assets/img/sz_optimized.png'),
  tc: require('../assets/img/tc_optimized.png'),
  td: require('../assets/img/td_optimized.png'),
  tg: require('../assets/img/tg_optimized.png'),
  th: require('../assets/img/th_optimized.png'),
  tj: require('../assets/img/tj_optimized.png'),
  tk: require('../assets/img/tk_optimized.png'),
  tl: require('../assets/img/tl_optimized.png'),
  tm: require('../assets/img/tm_optimized.png'),
  tn: require('../assets/img/tn_optimized.png'),
  to: require('../assets/img/to_optimized.png'),
  tr: require('../assets/img/tr_optimized.png'),
  tt: require('../assets/img/tt_optimized.png'),
  tv: require('../assets/img/tv_optimized.png'),
  tw: require('../assets/img/tw_optimized.png'),
  tz: require('../assets/img/tz_optimized.png'),
  ua: require('../assets/img/ua_optimized.png'),
  ug: require('../assets/img/ug_optimized.png'),
  us: require('../assets/img/us_optimized.png'),
  uy: require('../assets/img/uy_optimized.png'),
  uz: require('../assets/img/uz_optimized.png'),
  va: require('../assets/img/va_optimized.png'),
  vc: require('../assets/img/vc_optimized.png'),
  ve: require('../assets/img/ve_optimized.png'),
  vg: require('../assets/img/vg_optimized.png'),
  vi: require('../assets/img/vi_optimized.png'),
  vn: require('../assets/img/vn_optimized.png'),
  vu: require('../assets/img/vu_optimized.png'),
  wf: require('../assets/img/wf_optimized.png'),
  ws: require('../assets/img/ws_optimized.png'),
  ye: require('../assets/img/ye_optimized.png'),
  yt: require('../assets/img/yt_optimized.png'),
  za: require('../assets/img/za_optimized.png'),
  zm: require('../assets/img/zm_optimized.png'),
  zw: require('../assets/img/zw_optimized.png')
};

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  halfScreenHeight: height / 2,
  halfScreenWidth: width / 2
};

const globalStyles = {
  container: {
    padding: 25
  },
  containerModal: {
    position: 'absolute',
    padding: 25,
    bottom: 0,
    width: metrics.screenWidth,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.bold,
    letterSpacing: 1,
    lineHeight: 18
  },
  otpText: {
    fontSize: 24,
    fontFamily: fonts.bold
  },
  normal: {
    fontSize: 14,
    fontFamily: fonts.base,
    letterSpacing: 1,
    lineHeight: 18
  },
  normalBold: {
    fontSize: 14,
    fontFamily: fonts.bold,
    letterSpacing: 1,
    lineHeight: 18
  },
  description: {
    fontSize: 12,
    fontFamily: fonts.base,
    letterSpacing: 1,
    lineHeight: 18
  },
  descriptionBold: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 1,
    lineHeight: 18
  }
};

export {colors, images, globalStyles, metrics, flags};
