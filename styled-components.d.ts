import { DetailedHTMLProps, HTMLAttributes } from 'react';
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {} // Add this line if you have a default theme defined

  export interface StyledHTMLProps<T> extends DetailedHTMLProps<HTMLAttributes<T>, T> {}

  export function css(
    template: TemplateStringsArray,
    ...args: Interpolation<StyledComponentPropsWithRef<"div">>[]
  ): FlattenSimpleInterpolation;

  export function css(
    ...args: Interpolation<StyledComponentPropsWithRef<"div">>[]
  ): FlattenSimpleInterpolation;
  declare module 'styled-components' {
    export interface DefaultTheme {
      // Define your default theme properties here
    }
  }
  export default styled;
}