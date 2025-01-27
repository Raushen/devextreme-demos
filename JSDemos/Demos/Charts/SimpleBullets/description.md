Bullet charts are useful when you need to compare a single measure to a target value. A bullet bar indicates the measure and a vertical line indicates the target value. The bullet also includes a zero level line that indicates zero on the scale.

## Configure the Bullet Bar

Specify the [value](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/#value) property to set the length of the bullet bar. The value should be between the [startScaleValue](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/#startScaleValue) and [endScaleValue](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/#endScaleValue). If you do not specify the scale range, the **startScaleValue** is 0 and the **endScaleValue** is calculated automatically based on measure and target values. 

When you arrange several bullets in a column, set the same scale range for them so that their bullet bars can be compared visually. 

To change the bar color, use the [color](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/#color) property.

## Configure the Target and Zero Level Lines

Set the [target](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/#target) property to specify the target value. You can also use the [targetColor](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/#targetColor) and [targetWidth](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/#targetWidth) properties to customize the target line appearance. 

The zero level line indicates zero and has the same color as the target line. If you want to hide the zero level line, you can disable the [showZeroLevel](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/#showZeroLevel) property.

## Configure the Tooltip

A tooltip contains information about the measure and target values. To configure the tooltip, use the [tooltip](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/tooltip/) object. In this demo, the [customizeTooltip](/Documentation/ApiReference/UI_Components/dxBullet/Configuration/tooltip/#customizeTooltip) function within this object customizes the tooltip content.