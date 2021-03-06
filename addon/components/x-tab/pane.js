import Component from '@ember/component';
import { observer, computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import layout from '../../templates/components/x-tab/pane';
import ComponentChild from '../../mixins/component-child';

export default Component.extend(ComponentChild, {
    layout,
    classNameBindings: ['contentCurrent'],

    tagName: 'section',

    activeId: null,

    isActive: computed('activeId', 'elementId', function() {
        return this.get('activeId') === this.get('elementId');
    }).readOnly(),


    contentCurrent: true,

    show() {
        this.set('contentCurrent', true);
    },

    hide() {
        this.set('contentCurrent', false);
    },

    _showHide: observer('isActive', function() { // eslint-disable-line
        if(this.get('isActive')) {
            this.show();
        } else {
            this.hide();
        }
    }),

    init() {
        this._super(...arguments);

        scheduleOnce('afterRender', this, function() {
            this.set('contentCurrent', this.get('isActive'));
        });
    }
});
