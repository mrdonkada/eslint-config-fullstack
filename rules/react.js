'use strict';

// Specifies additional options to use in React / React-JSX projects.
// Note that you need to manually install `eslint-plugin-react` as a peer
// dependency (see https://goo.gl/I4AYlb for more details).

module.exports = {

	extends: [
		'plugin:react/recommended' // overridden below, unless this package falls behind plugin
	],

	plugins: [
		'react'
	],

	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},

	rules: { // https://github.com/yannickcr/eslint-plugin-react

		// general React rules

		'react/display-name': 1, // Prevent missing displayName in a React component definition
		'react/forbid-component-props': 0, // Forbid certain props on Components
		'react/forbid-prop-types': 0, // Forbid certain propTypes
		'react/no-array-index-key': 1, // Prevent using Array index in `key` props
		'react/no-children-prop': 1, // Prevent passing children as props
		'react/no-danger': 1, // Prevent usage of dangerous JSX properties
		'react/no-danger-with-children': 1, // Prevent problem with children and props.dangerouslySetInnerHTML
		'react/no-deprecated': 1, // Prevent usage of deprecated methods
		'react/no-did-mount-set-state': 1, // Prevent usage of setState in componentDidMount
		'react/no-did-update-set-state': 1, // Prevent usage of setState in componentDidUpdate
		'react/no-direct-mutation-state': 2, // Prevent direct mutation of this.state
		'react/no-find-dom-node': 1, // Prevent usage of findDOMNode
		'react/no-is-mounted': 1, // Prevent usage of isMounted
		'react/no-multi-comp': [1, { ignoreStateless: true }], // Prevent multiple component definition per file
		'react/no-render-return-value': 1, // Prevent usage of the return value of React.render
		'react/no-set-state': 0, // Prevent usage of setState
		'react/no-string-refs': 1, // Prevent using string references in ref attribute.
		'react/no-unescaped-entities': 0, // Prevent invalid characters from appearing in markup
		'react/no-unknown-property': 1, // Prevent usage of unknown DOM property (fixable)
		'react/no-unused-prop-types': 1, // Prevent definitions of unused prop types
		'react/prefer-es6-class': 0, // Enforce ES5 or ES6 class for React Components
		'react/prefer-stateless-function': 1, // Enforce stateless React Components to be written as a pure function
		'react/prop-types': 1, // Prevent missing props validation in a React component definition
		'react/react-in-jsx-scope': 1, // Prevent missing React when using JSX,
		'react/require-default-props': 1, // Enforce a defaultProps definition for every prop that is not a required prop
		'react/require-optimization': 0, // Enforce React components to have a shouldComponentUpdate method
		'react/require-render-return': 1, // Enforce ES5 or ES6 class for returning value in render function
		'react/self-closing-comp': 1, // Prevent extra closing tags for components without children (fixable)
		'react/sort-comp': 0, // Enforce component methods order
		'react/sort-prop-types': 0, // Enforce propTypes declarations alphabetical sorting
		'react/style-prop-object': 1, // Enforce style prop value being an object

		// JSX-specific rules

		'react/jsx-boolean-value': 0, // Enforce boolean attributes notation in JSX (fixable)
		'react/jsx-closing-bracket-location': 0, // Validate closing bracket location in JSX (fixable)
		'react/jsx-curly-spacing': 0, // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
		'react/jsx-equals-spacing': 0, // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
		'react/jsx-filename-extension': 0, // Restrict file extensions that may contain JSX
		'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'], // Enforce position of the first prop in JSX (fixable)
		'react/jsx-handler-names': 0, // Enforce event handler naming conventions in JSX
		'react/jsx-indent': 0, // Validate JSX indentation (fixable)
		'react/jsx-indent-props': 0, // Validate props indentation in JSX (fixable)
		'react/jsx-key': 1, // Validate JSX has key prop when in array or iterator
		'react/jsx-max-props-per-line': 0, // Limit maximum of props on a single line in JSX
		'react/jsx-no-bind': 0, // Prevent usage of .bind() and arrow functions in JSX props
		'react/jsx-no-comment-textnodes': 1, // Prevent comments from being inserted as text nodes
		'react/jsx-no-duplicate-props': 1, // Prevent duplicate props in JSX
		'react/jsx-no-literals': 0, // Prevent usage of unwrapped JSX strings
		'react/jsx-no-target-blank': 1, // Prevent usage of unsafe target='_blank'
		'react/jsx-no-undef': 1, // Disallow undeclared variables in JSX
		'react/jsx-pascal-case': 1, // Enforce PascalCase for user-defined JSX components
		'react/jsx-sort-props': 0, // Enforce props alphabetical sorting
		'react/jsx-space-before-closing': 0, // Validate spacing before closing bracket in JSX (fixable)
		'react/jsx-tag-spacing': 1, // Validate whitespace in and around the JSX opening and closing brackets (fixable)
		'react/jsx-uses-react': 1, // Prevent React to be incorrectly marked as unused
		'react/jsx-uses-vars': 1, // Prevent variables used in JSX to be incorrectly marked as unused
		'react/jsx-wrap-multilines': 1, // Prevent missing parentheses around multilines JSX (fixable)
	}

};
