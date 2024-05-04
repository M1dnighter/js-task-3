/** Задача 1 - Класс Time
Требуется написать класс времени - Time, который содержит:
	1.1. Поле с часами — hours (number)
	1.2. Поле с минутами — minutes (number)
	1.3. Прототип класса должен содержать метод сравнения isEarlier,
	который принимает объект класса Time и возвращает true,
	если переденное значение времени находится позже того,
	которое содержится в экземпляре объекта, у которого вызван метод.
	1.4. Прототип класса должен содержать метод сравнения isLater,
	который принимает объект класса Time и возвращает true,
	если переденное значение времени находится раньше того,
	которое содержится в экземпляре объекта, у которого вызван метод.
@constructor
@this {Time}
@param {number} hours - Час
@param {number} minutes - Минуты
 */
function Time(hours, minutes) { 
	try{
		if(hours <= 24 && hours >= 0){
			if(minutes <= 60 && minutes >= 0){
				// obj = {hours, minutes};
				this.hours = hours;
				this.minutes = minutes;
			}
			else{
				throw new Error('err');
			}
		}
		else{
			throw new Error('err');
		}
	}catch{
		throw new Error('err');
	}
};
Time.prototype.isEarlier = function(time){
	if(this.hours < time.hours){
		return true;
	}
	else if(this.hours === time.hours){
		if(this.minutes < time.minutes){
			return true;
		}
	}
	return false;
}
Time.prototype.isLater = function(time){
	if(this.hours > time.hours){
		return true;
	}
	else if(this.hours === time.hours){
		if(this.minutes >= time.minutes){
			return true;
		}
	}
	return false;
	
}

module.exports.Time = Time;
