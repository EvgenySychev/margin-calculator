import { useAppSelector } from "../../redux/store";

export const CarSelectionPanel = () => {

  const autoParameters = useAppSelector(state => state.autoParameters)

  return <div>
    <select name="carModel" id="carModel-select">
      <option value=""> -- Выберите модель автомобиля -- </option>
      <option value="4PRO"> -- 4 PRO -- </option>
      <option value="7PRO"> -- 7 PRO -- </option>
      <option value="8PRO"> -- 8 PRO -- </option>
      <option value="8PRO-MAX"> -- 8 PRO MAX -- </option>
    </select>
    <select name="modelConfiguration" id="modelConfiguration-select">
      <option value=""> -- Выберите комплектацию -- </option>
      <option value="Style"> -- Style -- </option>
      <option value="Prestige"> -- Prestige -- </option>
    </select>
    <ul>
      <li>Желтая</li>
      <li>Серая</li>
      <li>Белая</li>
      <li>Физ.лицо</li>
      <li>Лизинг</li>
    </ul>
  </div>
}