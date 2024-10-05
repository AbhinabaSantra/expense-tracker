import { annualChart } from "./AnalysisPageScripts/annualChart.js";
import { dailyChart } from "./AnalysisPageScripts/dailyChart.js";
import { monthlyChart } from "./AnalysisPageScripts/monthlyChart.js";
import { headerRender } from "./utils/headerRender.js";
import { hrefUpdate } from "./utils/hrefUpdate.js";

const userName = headerRender();
hrefUpdate(userName);
dailyChart(userName);
monthlyChart(userName);
annualChart(userName);
