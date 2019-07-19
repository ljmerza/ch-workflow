import { Controller, Get, Query } from '@nestjs/common';
import { WorkSpaceService } from './service';
import { WorkSpaceInterface } from './interfaces';
import { Observable } from 'rxjs';

@Controller()
export class WorkSpaceController {
    constructor(private readonly WorkSpaceService: WorkSpaceService) { }

    @Get('toggle/workspace')
    getWorkSpaces(@Query('authKey') authKey): Observable<WorkSpaceInterface[]> {
        return this.WorkSpaceService.getWorkSpaces(authKey);
    }
}
