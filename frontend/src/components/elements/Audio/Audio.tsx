/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement, useEffect, useRef } from "react"
import { Audio as AudioProto } from "src/autogen/proto"
import { StreamlitEndpoints } from "src/lib/StreamlitEndpoints"

export interface AudioProps {
  endpoints: StreamlitEndpoints
  width: number
  element: AudioProto
}

export default function Audio({
  element,
  width,
  endpoints,
}: AudioProps): ReactElement {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = element.startTime
    }
  }, [element.startTime])

  const uri = endpoints.buildMediaURL(element.url)
  return (
    <audio
      id="audio"
      ref={audioRef}
      controls
      src={uri}
      className="stAudio"
      style={{ width }}
    />
  )
}
