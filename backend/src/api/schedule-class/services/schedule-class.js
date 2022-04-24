'use strict';

/**
 * schedule-class service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-class.schedule-class');
