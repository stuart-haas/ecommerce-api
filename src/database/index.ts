import sequelize from 'database/config';
import * as config from 'config/app';

export const sync = async () => {
  if(config.isDev) {
    Promise.all([
      await sequelize.sync({ force: true })
    ]);
  }
};
