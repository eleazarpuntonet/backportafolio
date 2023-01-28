"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialProviders = void 0;
const testimonial_schema_1 = require("../schemas/testimonial.schema");
exports.testimonialProviders = [
    {
        provide: 'TESTIMONIAL_MODEL',
        useFactory: (connection) => connection.model('testimonials', testimonial_schema_1.TestimonialSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=testimonial.provider.js.map