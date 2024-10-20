import { preferenceSectionRender } from "./SettingsPageScripts/preferenceSection.js";
import { updateSection } from "./SettingsPageScripts/updateSection.js";
import { headerRender } from "./utils/headerRender.js";
import { hrefUpdate } from "./utils/hrefUpdate.js";

const userName = headerRender();
hrefUpdate(userName);
updateSection(userName);
preferenceSectionRender(userName);
