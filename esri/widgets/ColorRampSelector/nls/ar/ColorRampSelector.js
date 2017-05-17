// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define({colorRamps:{none:"\u0644\u0627 \u0634\u064a\u0621",blackToWhite_predefined:"\u0623\u0633\u0648\u062f \u0625\u0644\u0649 \u0623\u0628\u064a\u0636",yellowToRed_predefined:"\u0623\u0635\u0641\u0631 \u0625\u0644\u0649 \u0623\u062d\u0645\u0631",slope_predefined:"\u0627\u0644\u0627\u0646\u062d\u062f\u0627\u0631",aspect_predefined:"\u0648\u0627\u062c\u0647\u0629",errors_predefined:"\u0623\u062e\u0637\u0627\u0621",heatmap1_predefined:"\u062e\u0631\u064a\u0637\u0629 \u062d\u0631\u0627\u0631\u064a\u0629 #1",
elevation1_predefined:"\u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 #1",elevation2_predefined:"\u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639 #2",blueBright_predefined:"\u0623\u0632\u0631\u0642 \u0633\u0627\u0637\u0639",blueLightToDark_predefined:"\u0623\u0632\u0631\u0642 \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",blueGreenBright_predefined:"\u0623\u062e\u0636\u0631 \u0633\u0627\u0637\u0639 \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0632\u0631\u0642\u0629",
blueGreenLightToDark_predefined:"\u0623\u062e\u0636\u0631 \u0641\u0627\u062a\u062d \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0632\u0631\u0642\u0629 \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",brownLightToDark_predefined:"\u0628\u0646\u064a \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",brownToBlueGreenDivergingBright_predefined:"\u0628\u0646\u064a \u0625\u0644\u0649 \u0623\u062e\u0636\u0631 \u0645\u062a\u0634\u0639\u0628 \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0632\u0631\u0642\u0629\u060c \u0633\u0627\u0637\u0639",
brownToBlueGreenDivergingDark_predefined:"\u0628\u0646\u064a \u0625\u0644\u0649 \u0623\u062e\u0636\u0631 \u0645\u062a\u0634\u0639\u0628 \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0632\u0631\u0642\u0629\u060c \u062f\u0627\u0643\u0646",coefficientBias_predefined:"\u0627\u0646\u062d\u0631\u0627\u0641 \u0627\u0644\u0645\u0639\u0627\u0645\u0644",coldToHotDiverging_predefined:"\u062a\u0634\u0639\u0628 \u0623\u0632\u0631\u0642 \u0625\u0644\u0649 \u062d\u0627\u0631",conditionNumber_predefined:"\u0631\u0642\u0645 \u0627\u0644\u062d\u0627\u0644\u0629",
cyanToPurple_predefined:"\u0633\u0645\u0627\u0648\u064a \u0625\u0644\u0649 \u0623\u0631\u062c\u0648\u0627\u0646\u064a",cyanLightToBlueDark_predefined:"\u0633\u0645\u0627\u0648\u064a \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u0623\u0632\u0631\u0642 \u062f\u0627\u0643\u0646",distance_predefined:"\u0627\u0644\u0645\u0633\u0627\u0641\u0629",grayLightToDark_predefined:"\u0631\u0645\u0627\u062f\u064a \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",greenBright_predefined:"\u0623\u062e\u0636\u0631 \u0633\u0627\u0637\u0639",
greenLightToDark_predefined:"\u0623\u062e\u0636\u0631 \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",greenToBlue_predefined:"\u0623\u062e\u0636\u0631 \u0625\u0644\u0649 \u0623\u0632\u0631\u0642",orangeBright_predefined:"\u0628\u0631\u062a\u0642\u0627\u0644\u064a \u0633\u0627\u0637\u0639",orangeLightToDark_predefined:"\u0628\u0631\u062a\u0642\u0627\u0644\u064a \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",partialSpectrum_predefined:"\u0637\u064a\u0641 \u062c\u0632\u0626\u064a",
partialSpectrum1Diverging_predefined:"\u0637\u064a\u0641 \u062c\u0632\u0626\u064a 1 \u0645\u062a\u0634\u0639\u0628",partialSpectrum2Diverging_predefined:"\u0637\u064a\u0641 \u062c\u0632\u0626\u064a 2 \u0645\u062a\u0634\u0639\u0628",pinkToYellowGreenDivergingBright_predefined:"\u0642\u0631\u0646\u0641\u0644\u064a \u0625\u0644\u0649 \u0623\u062e\u0636\u0631 \u0645\u062a\u0634\u0639\u0628 \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0635\u0641\u0631\u060c \u0633\u0627\u0637\u0639",
pinkToYellowGreenDivergingDark_predefined:"\u0642\u0631\u0646\u0641\u0644\u064a \u0625\u0644\u0649 \u0623\u062e\u0636\u0631 \u0645\u062a\u0634\u0639\u0628 \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0635\u0641\u0631\u060c \u062f\u0627\u0643\u0646",precipitation_predefined:"\u062a\u0643\u062b\u064a\u0641",prediction_predefined:"\u0627\u0644\u062a\u0646\u0628\u0624",purpleBright_predefined:"\u0623\u0631\u062c\u0648\u0627\u0646\u064a \u0633\u0627\u0637\u0639",purpleToGreenDivergingBright_predefined:"\u0623\u0631\u062c\u0648\u0627\u0646\u064a \u0625\u0644\u0649 \u0623\u062e\u0636\u0631 \u0645\u062a\u0634\u0639\u0628\u060c \u0633\u0627\u0637\u0639",
purpleToGreenDivergingDark_predefined:"\u0623\u0631\u062c\u0648\u0627\u0646\u064a \u0625\u0644\u0649 \u0623\u062e\u0636\u0631 \u0645\u062a\u0634\u0639\u0628\u060c \u062f\u0627\u0643\u0646",purpleBlueBright_predefined:"\u0623\u0632\u0631\u0642 \u0633\u0627\u0637\u0639 \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0631\u062c\u0648\u0627\u0646\u064a",purpleBlueLightToDark_predefined:"\u0636\u0648\u0621 \u0623\u0631\u062c\u0648\u0627\u0646\u064a \u0623\u0632\u0631\u0642 \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",
purpleRedBright_predefined:"\u0623\u062d\u0645\u0631 \u0633\u0627\u0637\u0639 \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0631\u062c\u0648\u0627\u0646\u064a",purpleRedLightToDark_predefined:"\u0623\u062d\u0645\u0631 \u0641\u0627\u062a\u062d \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0631\u062c\u0648\u0627\u0646\u064a \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",redBright_predefined:"\u0623\u062d\u0645\u0631 \u0633\u0627\u0637\u0639",redLightToDark_predefined:"\u0623\u062d\u0645\u0631 \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u062f\u0627\u0643\u0646",
redToBlueDivergingBright_predefined:"\u0623\u062d\u0645\u0631 \u0625\u0644\u0649 \u0623\u0632\u0631\u0642 \u0645\u062a\u0634\u0639\u0628\u060c \u0633\u0627\u0637\u0639",redToBlueDivergingDark_predefined:"\u0623\u062d\u0645\u0631 \u0625\u0644\u0649 \u0623\u0632\u0631\u0642 \u0645\u062a\u0634\u0639\u0628\u060c \u062f\u0627\u0643\u0646",redToGreen_predefined:"\u0623\u062d\u0645\u0631 \u0625\u0644\u0649 \u0623\u062e\u0636\u0631",redToGreenDivergingBright_predefined:"\u0627\u0646\u062d\u0631\u0627\u0641 \u0628\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u062d\u0645\u0631 \u0625\u0644\u0649 \u0627\u0644\u0623\u062e\u0636\u0631\u060c \u0648\u0627\u0644\u0633\u0637\u0648\u0639",
redToGreenDivergingDark_predefined:"\u0623\u062d\u0645\u0631 \u0625\u0644\u0649 \u0623\u062e\u0636\u0631 \u0645\u062a\u0634\u0639\u0628\u060c \u062f\u0627\u0643\u0646",spectrumFullBright_predefined:"\u0637\u064a\u0641 \u0643\u0627\u0645\u0644 \u0633\u0627\u0637\u0639",spectrumFullDark_predefined:"\u0637\u064a\u0641 \u0643\u0627\u0645\u0644 \u062f\u0627\u0643\u0646",spectrumFullLight_predefined:"\u0637\u064a\u0641 \u0643\u0627\u0645\u0644 \u0641\u0627\u062a\u062d",surface_predefined:"\u0627\u0644\u0633\u0637\u062d",
temperature_predefined:"\u062f\u0631\u062c\u0629 \u0627\u0644\u062d\u0631\u0627\u0631\u0629",whiteToBlack_predefined:"\u0623\u0628\u064a\u0636 \u0625\u0644\u0649 \u0623\u0633\u0648\u062f",yellowToDarkRed_predefined:"\u0623\u0635\u0641\u0631 \u0625\u0644\u0649 \u0623\u062d\u0645\u0631 \u062f\u0627\u0643\u0646",yellowToGreenToDarkBlue_predefined:"\u0623\u0635\u0641\u0631 \u0625\u0644\u0649 \u0623\u062e\u0636\u0631 \u0625\u0644\u0649 \u0623\u0632\u0631\u0642 \u062f\u0627\u0643\u0646",yellowGreenBright_predefined:"\u0623\u062e\u0636\u0631 \u0633\u0627\u0637\u0639 \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0635\u0641\u0631",
yellowGreenLightToDark_predefined:"\u0623\u062e\u0636\u0631 \u0641\u0627\u062a\u062d \u0645\u0627\u0626\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0635\u0641\u0631 \u0625\u0644\u0649 \u062f\u0627\u0643\u0646"}});