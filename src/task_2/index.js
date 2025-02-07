const { Time } = require('../task_1/index');
/** Задача 2 - Класс Meeting
Требуется написать класс встречи - Meeting, который содержит:
	2.1. Поле c датой встречи (объект класса Date)
	2.2. Поле — время начала встречи (объект класса Time)
	2.3. Поле — время конца встречи (объект класса Time)
	2.4. Прототип класса должен содержать метод isMeetingInTimeRange, принимающий два аргумента:
		Начало временного промежутка — объект класса Time
		Конец временного промежутка — объект класса Time
		Должен возвращать true, если встреча, у которой был вызван метод,
		пересекает переданный временной промежутук
	2.5. Время начала встречи должно быть больше времени конца
	2.6. Встреча может быть назначана только в промежутке между 08:00 до 19:00
@constructor
@this {Meeting}
@param {Date} meetingDate - Дата встречи
@param {Time} startTime - Время начала встречи
@param {Time} endTime - Время конца встречи
 */
function Meeting(meetingDate, startTime, endTime) { 
	this.meetingDate = meetingDate;
	this.startTime = startTime;
	this.endTime = endTime;
	if(startTime < endTime || startTime.hours < 8 || startTime.hours > 19 || startTime.minutes > 59 || startTime.minutes < 0
		|| endTime.hours < 8 || endTime.hours > 19 || endTime.minutes > 59 || endTime.minutes < 0 || !startTime || !endTime){
		throw 'except';
	}
};
Meeting.prototype.isMeetingInTimeRange = function(start, end)
{
	return !(this.startTime.isLater(start) && this.startTime.isLater(end) 
	|| this.endTime.isEarlier(start) && this.endTime.isEarlier(end));
}

module.exports.Meeting = Meeting;
