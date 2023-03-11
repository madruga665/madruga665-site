
'use client';
import { Puff } from "react-loader-spinner";

import PageTemplate from "@/templates/PageTemplate";
import colors from "@/styles/colors.module.scss";

function Loading() {
  return (
    <PageTemplate>
      <div>
        <Puff
          height='140'
          width='140'
          radius={1}
          color={colors.colorEmerald}
          ariaLabel='puff-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    </PageTemplate>
  );
}

export default Loading;