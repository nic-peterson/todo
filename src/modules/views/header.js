// The header function creates a header div and a logo child element
import {
  createElt,
  returnNodeById,
} from '../helperFunctions/domFunctions';

export default function header() {
  createElt(document.body, 'div', 'header', 'header', '');

  createElt(
    returnNodeById('header'),
    'div',
    'logo',
    'logo',
    `<p><span class="material-icons">
      done_all
      </span>ToDo!</p>`,
  );
}
