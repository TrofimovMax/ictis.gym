'use strict';

/**
 * schedule-day service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-day.schedule-day');
