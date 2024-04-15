import { useState } from 'react';
import { CityGrid, Blocks, Block, Outskirts, Outskirt, Marker } from './styles';

import times from 'lodash/times';
import { map, slice } from 'lodash';

const staticValues = [1,4,5,6,3,2, 3,1,2];

export default function UrbanSprawl() {
    const [dynamicValues, setDynamicValues] = useState(() => times(9, () => null));

    return <CityGrid>
        <Outskirts edge="s">
            {map(slice(staticValues, 0, 6),
                (v, i) => <Outskirt key={'s'+i}><Marker value={v} wealth>{v}</Marker></Outskirt>
            )}
        </Outskirts>
        <Outskirts edge="w">
            {map(slice(staticValues, 6, 9),
                (v, i) => <Outskirt key={'w'+i}><Marker value={v}>{v}</Marker></Outskirt>
            )}
        </Outskirts>
        <Outskirts edge="n">
            {map(slice(dynamicValues, 0, 3),
                //(v, i) => <Outskirt key={'n'+i}><Marker value={v}>{v}</Marker></Outskirt>
                (v, i) => <Outskirt key={'n'+i}><InputMarker </Outskirt>
            )}
        </Outskirts>
        <Outskirts edge="e">
            {map(slice(dynamicValues, 3, 9),
                (v, i) => <Outskirt key={'e'+i}><Marker value={v}>{v}</Marker></Outskirt>
            )}
        </Outskirts>
        <Blocks>
            <Block>11</Block><Block>12</Block><Block>13</Block>
            <Block>14</Block><Block>15</Block><Block>16</Block>
            <Block>21</Block><Block>22</Block><Block>23</Block>
            <Block>24</Block><Block>25</Block><Block>26</Block>
            <Block>31</Block><Block>32</Block><Block>33</Block>
            <Block>34</Block><Block>35</Block><Block>36</Block>
            <Block>41</Block><Block>42</Block><Block>43</Block>
            <Block>44</Block><Block>45</Block><Block>46</Block>
            <Block>51</Block><Block>52</Block><Block>53</Block>
            <Block>54</Block><Block>55</Block><Block>56</Block>
            <Block>61</Block><Block>62</Block><Block>63</Block>
            <Block>64</Block><Block>65</Block><Block>66</Block>
        </Blocks>
    </CityGrid>;
}
