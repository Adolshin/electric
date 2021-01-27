import {scroll1} from './scroll';

import {toggleClass, removeClass,addClass,scrollToAnchor} from './common';


addClass('.js-modal-open', '.js-modal');
removeClass('.js-close', '.js-modal');
removeClass('.js-overlay', '.js-modal');

toggleClass('.js-burger', '.js-menu');

scrollToAnchor('.anchor1','#anchor1');

scroll1();


