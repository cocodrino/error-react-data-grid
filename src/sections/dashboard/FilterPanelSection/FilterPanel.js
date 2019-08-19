import React from 'react';
import { connect } from 'react-redux';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import DateRangePicker from 'react-daterange-picker';
import * as Action from '../../../state/actions/calculator-actions';
import './CustomThemeCalendar.scss';
import Switcher from '../../../bitaComponents/Switcher/Switcher';

const mapStateToProps = state => {
  return {
    filterPanelData: state.dashboard.filterPanelData,
    sideBarSelected: state.dashboard.sideBarSelected,
  };
};

const FilterPanelComponent = props => {
  const setNewSwitchState = newState => {
    props.dispatch(Action.storeSwitchState({ state: newState }));
  };

  const onSelect = date => {
    console.log(JSON.stringify(date));
    props.dispatch(Action.storeChangeFilterDate(date));
  };

  const clickGetData = () => {
    // TODO COMO SE HACE MUCHA REFERENCIA A LAS CADENAS OHLC EOD y TCK ES
    // BUENO CONVERTIRLAS EN CONSTANTES, SIMILAR A LO DEL ICONO EN SIDEBAR
    const activeOption = ['OHLC', 'EOD', 'TICK'].find(op => props.filterPanelData[op] === true);
    props.dispatch(
      Action.getData({
        sideBarSelected: props.sideBarSelected,
        id: props.filterPanelData.id,
        activeOption,
        date: props.filterPanelData.date,
        frecuency: false,
      }),
    );
  };

  const component = !props.filterPanelData.active ? (
    <></>
  ) : (
    <div className="mb-5">
      <div>
        <p className="text-2xl text-electricalblue font-bold mt-2">{props.filterPanelData.id}</p>
        <p className="text-base text-electricalblue border-b-2 border-white pb-2 mb-2">
          {props.filterPanelData.name}
        </p>
        <p className="text-base text-justify">{props.filterPanelData.description}</p>

        <div className="flex items-start justify-between my-4">
          <Switcher
            allow-multiples-actives={false}
            onChange={setNewSwitchState}
            className="flex justify-center flex-col "
            classSwitch="my-1 flex items-center"
          >
            <Switcher.Switch classLabel="ml-3" label="OHLC Data" _key="OHL" />
            <Switcher.Switch classLabel="ml-3" label="EOD Data" _key="EOD" />
            <Switcher.Switch classLabel="ml-3" label="Tick Data" _key="TICK" />
          </Switcher>

          <div>
            <p className="text-base calendartitle">Select Date</p>
            <div className="my-1 flex justify-center">
              <DateRangePicker onSelect={onSelect} value={props.filterPanelData.date} />
            </div>
          </div>
        </div>
        <button
          onClick={clickGetData}
          className="border text-electricalblue hover:text-white bg-transparent hover:bg-gray-300 hover:border-white border-electricalblue px-3 py-2 w-24 block mx-auto"
        >
          GET DATA
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="w-5/12 px-5 treeview max-h-screen overflow-auto pb-5 full-heigh-less-navbar"
      data-simplebar
    >
      <div>{component}</div>
    </div>
  );
};

const FilterPanel = connect(mapStateToProps)(FilterPanelComponent);
export default FilterPanel;
