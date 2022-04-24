'use strict';

/**
 * schedule-time service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-time.schedule-time');
