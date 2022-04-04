import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

dayjs.locale(ja);

/**
 * 日時を表現するためのクラス。
 *
 * @class DateTime
 */
export class DateTime {
  public value: dayjs.Dayjs;

  constructor(date?: Date) {
    this.value = dayjs(date);
  }

  public static fromString(stringDate: string): DateTime {
    return new DateTime(dayjs(stringDate).toDate());
  }

  public toISOString(): string {
    return this.value.toISOString();
  }

  public addDays(days: number): DateTime {
    return new DateTime(this.value.clone().add(days, 'days').toDate());
  }

  public isAfter(dateTime?: DateTime): boolean {
    return this.value.isAfter(dateTime == null ? dayjs() : dateTime.value);
  }

  public isBefore(dateTime?: DateTime): boolean {
    return this.value.isBefore(dateTime == null ? dayjs() : dateTime.value);
  }

  public isSame(dateTime: DateTime): boolean {
    return this.value.isSame(dateTime.value);
  }

  public isToday(): boolean {
    return this.value.isSame(dayjs(), 'day');
  }

  // fromがreceiverより未来なら負の値を返す
  // a < bのときb.dayDiff(a) > 0
  public dayDiff(dateTime: DateTime): number {
    return this.value.startOf('day').diff(dateTime.value.startOf('day'), 'days');
  }

  public formatToYMDHMS(): string {
    return this.value.format('YYYY-MM-DD HH:mm:ss');
  }

  public formatToYMDHM(): string {
    return this.value.format('YYYY-MM-DD HH:mm');
  }

  public formatToYMD(): string {
    return this.value.format('YYYY-MM-DD');
  }
}
