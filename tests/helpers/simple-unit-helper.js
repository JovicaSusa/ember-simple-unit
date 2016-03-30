import Ember from 'ember';

function shouldHaveAttribute(attr){
  return function(assert){
    let model   = this.subject(),
        hasAttr = Object.keys(model.toJSON()).indexOf(attr) > -1;

    assert.ok(hasAttr);
  };
}

function shouldHaveRelationship(relationshipName, relationshipKind){
  return function(assert){
    let modelName    = this.subject().get('constructor.modelName'),
        model        = this.store().modelFor(modelName),
        relationship = Ember.get(model, 'relationshipsByName').get(relationshipName);

    assert.equal(relationship.key, relationshipName);
    assert.equal(relationship.kind, relationshipKind);
  };
}

export { shouldHaveAttribute, shouldHaveRelationship };
