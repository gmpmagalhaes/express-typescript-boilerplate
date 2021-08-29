import app from './app';

const server = app.listen(app.get('port'), () => {
    console.log(`App running at http://localhost:${app.get('port')} in ${app.get('env')}`);
});

export default server;