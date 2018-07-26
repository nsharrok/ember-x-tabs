import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-tab/nav-item', 'Integration | Component | x tab/nav item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('externalAction', () => {
        assert.equal(true, true);
    });

  this.render(hbs`{{x-tab/nav-item selectAction=(action externalAction)}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-tab/nav-item selectAction=(action externalAction)}}
      template block text
    {{/x-tab/nav-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});