function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        template: [
            '<div class="member">',
            '  <h3>{{ member.name }}</h3>',
            '  <h4>{{ member.position }}</h4>',
            '  <p>{{ member.bio }}</p>',
            '  <skills skills="member.skills"></skills>',
            '</div>'
        ].join('')
    }
}