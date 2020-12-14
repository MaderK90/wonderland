AFRAME.registerComponent('change_cat', {
    schema: {
        normal: {type: 'string', default: 'assets/black.jpg'},
        hover: {type: 'string', default: 'assets/katze.png'}
    },
    init: function() {
        const el = this.el; // Reference the entity where the component is attached to
        const normalColor = this.data.normal;
        const hoverColor = this.data.hover;

        el.addEventListener('mouseenter', () => {
            // update single property of multi-property component
            // property color of component material
            el.setAttribute('material', 'src', hoverColor);
        });

        el.addEventListener('mouseleave', () => {
            el.setAttribute('material', 'src', normalColor);
        });
    }
});

AFRAME.registerComponent('change_rabbit', {
    schema: {
        normal: {type: 'string', default: 'assets/black.jpg'},
        hover: {type: 'string', default: 'assets/rabbit.jpg'}
    },
    init: function() {
        const el = this.el; // Reference the entity where the component is attached to
        const normalColor = this.data.normal;
        const hoverColor = this.data.hover;

        el.addEventListener('mouseenter', () => {
            // update single property of multi-property component
            // property color of component material
            el.setAttribute('material', 'src', hoverColor);
        });

        el.addEventListener('mouseleave', () => {
            el.setAttribute('material', 'src', normalColor);
        });
    }
});

AFRAME.registerComponent('change_alice', {
    schema: {
        normal: {type: 'string', default: 'assets/black.jpg'},
        hover: {type: 'string', default: 'assets/alice.jpg'}
    },
    init: function() {
        const el = this.el; // Reference the entity where the component is attached to
        const normalColor = this.data.normal;
        const hoverColor = this.data.hover;

        el.addEventListener('mouseenter', () => {
            // update single property of multi-property component
            // property color of component material
            el.setAttribute('material', 'src', hoverColor);
        });

        el.addEventListener('mouseleave', () => {
            el.setAttribute('material', 'src', normalColor);
        });
    }
});

AFRAME.registerComponent('change_zauberer', {
    schema: {
        normal: {type: 'string', default: 'assets/black.jpg'},
        hover: {type: 'string', default: 'assets/zauberer.jpg'}
    },
    init: function() {
        const el = this.el; // Reference the entity where the component is attached to
        const normalColor = this.data.normal;
        const hoverColor = this.data.hover;

        el.addEventListener('mouseenter', () => {
            // update single property of multi-property component
            // property color of component material
            el.setAttribute('material', 'src', hoverColor);
        });

        el.addEventListener('mouseleave', () => {
            el.setAttribute('material', 'src', normalColor);
        });
    }
});