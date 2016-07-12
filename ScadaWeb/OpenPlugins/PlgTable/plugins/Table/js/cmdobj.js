﻿/*
 * Command object that implements sending commands
 *
 * Author   : Mikhail Shiryaev
 * Created  : 2016
 * Modified : 2016
 *
 * Requires:
 * - jquery
 * - bootstrap
 * - utils.js
 * - popup.js
 */

// Rapid SCADA namespace
var scada = scada || {};

scada.cmd = {
    // Show command dialog
    show: function (rootPath, viewID, ctrlCnlNum, opt_callback) {
        var popup = scada.popupLocator.getPopup();
        if (popup) {
            popup.showModal(rootPath + "plugins/Chart/Chart.aspx?viewID=" + viewID + "&cnlNum=101");
        }
    }
}