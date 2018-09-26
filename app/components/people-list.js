import Component from '@ember/component';

export default Component.extend({
    actions: {
        showPerson : (person) => alert(person),
        showPersonWithMoreInfo(person) {
            alert("person is: " + person);
        },
        showMore: function showPerson(person) {
            alert("person is: " + person);
        }
    }
});
