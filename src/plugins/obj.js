const objPlugin = {
  install(app, options) {
    console.log('objPlugin');
    console.log(app);
    console.log(options);
    // app.component() 로 전역 컴포넌트 설정 가능
    // app.config.globalProperties 전역 애플리케이션 인스턴스에 속성을 추가할 수 있음
    // app.directive() 커스텀 디렉티브 추가 가능
    // app.provide 리소스를 자식컴포넌트에 사용하도록 추가 가능
  },
};

export default objPlugin;
