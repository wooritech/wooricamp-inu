import globals from 'globals'; // 'globals' 패키지에서 전역 변수를 가져온다.
import pluginJs from '@eslint/js'; // '@eslint/js' 패키지에서 JavaScript 관련 ESLint 규칙을 가져온다.

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        rules: {
            semi: 'warn', // 각 명령문 끝에 세미콜론(;)이 사용되지 않을 때 경고를 발생시킨다.
            'prefer-const': 'error', // 재할당이 발생하지 않는데 let을 사용하는 경우 에러를 발생시킨다..
            'no-unused-vars': 'error', // 선언했지만 사용되지 않은 변수가 있으면 에러를 발생시킨다.
        },
    },
    // jest로 테스트할때 "no-undef"라고 정의되지 않은 변수를 사용하면 에러를 발생시키는데 테스트코드만 이것을 막아주는 코드이다.
    {
        overrides: [
            {
                files: ['test/**/*'],
                env: {
                    jest: true,
                },
            },
        ],
    },
    {
        extends: ['prettier'], // Prettier 규칙과 충돌하는 ESLint 규칙을 비활성화한다.
    },
];
