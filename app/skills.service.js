System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SkillService;
    return {
        setters:[],
        execute: function() {
            SkillService = (function () {
                function SkillService() {
                }
                SkillService.prototype.getSkills = function () {
                    return ["Sasha ne jdu", "Sasha vernusj", "Sasha sho tu mytush", "Ny nenado tak"];
                };
                return SkillService;
            }());
            exports_1("SkillService", SkillService);
        }
    }
});
//# sourceMappingURL=skills.service.js.map