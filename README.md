# sasslint-config

[![INC](https://img.shields.io/badge/%E2%9C%A8-IdeasNeverCease/stylelint--config-51dcfb.svg?style=flat-square)](https://code.webb.page/IdeasNeverCease/stylelint-config)

> Stylelint [configuration](https://stylelint.io/user-guide/configuration) for [!NC](https://inc.sh) projects



## Installation

```bash
$ npm i @inc/stylelint-config -D
```



## Usage

### .stylelintrc config

```json
{
  extends: "@inc/stylelint-config"
}
```

### package.json config

```json
{
  "name": "your_project",
  "scripts": {
    ...,
    "test:sass": "stylelint '**/*.scss'",
    ...
  }
}
```

If your script was called `test:sass` you could then run `npm run test:sass` and your Sass files would be linted.



## License

[MIT](LICENSE) Copyright © 2019, Ideas Never Cease.
