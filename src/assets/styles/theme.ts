import { colors } from './colors';
import { constants } from './constants';
import { mixins } from './mixins';

const theme = {// tudo que vamos importar está qui
    colors,
    constants,
    mixins,
} as const;// essa parte á um apelido

export default theme;

// esse arquivo é como se fosse nosse container