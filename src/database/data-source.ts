let AppDataSource = null;

const InitDatabase = async (dataSource) => {
    AppDataSource = dataSource;

    await AppDataSource.initialize()
    .then(() => {
        console.log("database is runnnig!") 
    })
    .catch((error) => console.log(error));
}

export { AppDataSource, InitDatabase}