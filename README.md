# pluggable-postcss-nested

This is simply a module wrapper to enable integration of the excellent
[postcss-nested](https://github.com/postcss/postcss-nested) postcss plugin into
[create-react-app](https://github.com/facebookincubator/create-react-app)'s
webpack config without ejecting.

It requires that your webpack application be created using the
[react-scripts-pluggable](https://www.npmjs.com/package/react-scripts-pluggable)
scripts package:
```bash
create-react-app myAwesomeApp --scripts-version react-scripts-pluggable
cd myAwesomeApp
npm install pluggable-postcss-nested
npm run start
```
