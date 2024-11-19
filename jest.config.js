const config = {
    verbose: true, // 런타임 실행시 상세한 디버깅 정보를 보여줌
    testMatch: ['**/test/**/*.spec.js'], // 테스트를 실행할 파일 또는 디렉토리의 match 정보 정의
    testPathIgnorePatterns: ['/node_modules/'], // 테스트를 수행하면 안되는 파일 또는 디렉토리의 match 정보를 정의
    collectCoverage: true,
};

export default config;
