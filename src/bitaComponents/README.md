## BITA COMPONENTS

Son un conjunto de componentes creados en React con la finalidad de unificar el estilo y proporcionar
una abstracción en su uso

#### SWITCHER

Permite usar _react-switch_ sin necesidad de toda la configuración que requiere,sustituyendo esto

```js
<div className="flex justify-center flex-col ml-3 my-8">
  <div className="my-1 flex items-center">
    <Switch
      onChange={handleChangeSwitch('OHLC')}
      offColor="#5c5c5c"
      onColor="#50C1FB"
      checked={props.filterPanelData.OHLC}
    />{' '}
    <span className="ml-3">OHLC Data</span>
  </div>
  <div className="my-1 flex items-center">
    <Switch
      onChange={handleChangeSwitch('EOD')}
      offColor="#5c5c5c"
      onColor="#50C1FB"
      checked={props.filterPanelData.EOD}
    />{' '}
    <span className="ml-3">EOD Data</span>
  </div>
  <div className="my-1 flex items-center">
    <Switch
      onChange={handleChangeSwitch('TICK')}
      offColor="#5c5c5c"
      onColor="#50C1FB"
      checked={props.filterPanelData.TICK}
    />{' '}
    <span className="ml-3">Tick Data</span>
  </div>
</div>
```

por una estructura más simple como esta

```js
              <Switcher.Switch allow-multiples-actives={false}  onChange={setNewSwitchState}
                className="flex justify-center flex-col ml-3 my-8"
                classSwitch="my-1 flex items-center">
                <Switcher.Switch classLabel="ml-3" label="OHLC Data" _key="OHL" active/>
                <Switcher.Switch classLabel="ml-3" label="EOD Data" _key="EOD"/>
                <Switcher.Switch classLabel="ml-3" _key="TICK">Tick Data </Switcher.Switch>
              </Switcher>
```

el componente pasará al callback invocado por **onChange** el estado actual de la switchera, siendo en
este caso del tipo

```js
 {"OHL":true,"EOD":false,"TICK":false}
```

como puede ver en el ejemplo el switcher proporciona cierta flexibilidad

1. En caso de omitirse \_key el componente usará el label como clave para el objeto retornado
2. Un Switch se puede marcar con el atributo **active** para obligar al componente a renderizarlo en estado ON
3. el label o texto del componente puede ser seteado a través del atributo **label** o también pasarlo dentro del tag

```js
<Switcher.Switch classLabel="ml-3" _key="TICK">
  Tick Data{' '}
</Switcher.Switch>
```

##### Atributo allow-multiples-actives

este Atributo tiene la finalidad de implementar que cuando el usuario cambie el estado de un switch a ON
se desactiven los otros switches, por defecto es false

##### Clases internas al componente

El componente ofrece algunas flexibilidades a la hora de poder setear estilos, utilizando los atributos
_classSwitch_ y _classLabel_ se puede agregar alguna clase al html interno generado por el componente
(recomiendo ver el ejemplo de la switchera sin usar el bita component y usandolo, colocado arriba, para entender el uso de estos atributos)

#### Sidebar

Este componente renderiza un menu colocado verticalmente del lado izquierdo

```js
<Sidebar>
  <Sidebar.Button
    label="Index"
    image={index}
    onClick={() => props.dispatch(Action.selectIndices())}
  />
  <Sidebar.Button
    label="Cryptos"
    image={cryptos}
    onClick={() => props.dispatch(Action.selectCripto())}
  />
  <Sidebar.Button label="User" image={users} onClick={() => props.dispatch(Action.selectUsers())} />
</Sidebar>
```

**Sidebar.Button** componente recibe el label, que es el texto mostrado, la imagen que se refiere al ícono
y el callback ejecutado al darle click al elemento

Internamente el componente se encarga de cambiar la apariencia del ícono a azul cuando se le hace click
