/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * This brush was originally created by Ildar Shaimordanov
 * homepage:   http://with-love-from-siberia.blogspot.com/
 * brush page: http://with-love-from-siberia.blogspot.com/2009/07/finest-code-syntax-highlighter.html
 */
SyntaxHighlighter.brushes.PostgreSQL = function()
{
    var geshiKeywords1 = 'bigint tinyint money ' + 
        'smallmoney datetime smalldatetime ' + 
        'text nvarchar ntext varbinary image ' + 
        'sql_variant uniqueidentifier ' + 
        'ABSOLUTE ACTION ADD ADMIN AFTER AGGREGATE ALIAS ALLOCATE ALTER ARE ARRAY AS ' + 
        'ASC ASSERTION AT AUTHORIZATION BACKUP BEFORE BEGIN BINARY BIT BLOB BOOLEAN BOTH BREADTH ' + 
        'BREAK BROWSE BULK BY CALL CASCADE CASCADED CASE CAST CATALOG CATCH CHAR CHARACTER CHECK CHECKPOINT ' + 
        'CLASS CLOB CLOSE CLUSTERED COALESCE COLLATE COLLATION COLUMN COMMIT COMPLETION COMPUTE CONNECT ' + 
        'CONNECTION CONSTRAINT CONSTRAINTS CONSTRUCTOR CONTAINS CONTAINSTABLE CONTINUE CONVERT CORRESPONDING CREATE ' + 
        'CUBE CURRENT CURRENT_DATE CURRENT_PATH CURRENT_ROLE CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER ' + 
        'CURSOR CYCLE DATA DATABASE DATE DAY DBCC DEALLOCATE DEC DECIMAL DECLARE DEFAULT DEFERRABLE ' + 
        'DEFERRED DELETE DENY DEPTH DEREF DESC DESCRIBE DESCRIPTOR DESTROY DESTRUCTOR DETERMINISTIC ' + 
        'DIAGNOSTICS DICTIONARY DISCONNECT DISK DISTINCT DISTRIBUTED DOMAIN DOUBLE DROP DUMMY DUMP DYNAMIC ' + 
        'EACH ELSE END END-EXEC EQUALS ERRLVL ESCAPE EVERY EXCEPT EXCEPTION EXEC EXECUTE EXIT ' + 
        'EXTERNAL FALSE FETCH FILE FILLFACTOR FIRST FLOAT FOR FOREIGN FOUND FREE FREETEXT FREETEXTTABLE ' + 
        'FROM FULL FUNCTION GENERAL GET GLOBAL GOTO GRANT GROUP GROUPING HAVING HOLDLOCK HOST HOUR ' + 
        'IDENTITY IDENTITY_INSERT IDENTITYCOL IF IGNORE IMMEDIATE INDEX INDICATOR INITIALIZE INITIALLY ' + 
        'INNER INOUT INPUT INSERT INT INTEGER INTERSECT INTERVAL INTO IS ISOLATION ITERATE KEY ' + 
        'KILL LANGUAGE LARGE LAST LATERAL LEADING LEFT LESS LEVEL LIMIT LINENO LOAD LOCAL ' + 
        'LOCALTIME LOCALTIMESTAMP LOCATOR MAP MATCH MINUTE MODIFIES MODIFY MODULE MONTH NAMES NATIONAL ' + 
        'NATURAL NCHAR NCLOB NEW NEXT NO NOCHECK NONCLUSTERED NONE NULLIF NUMERIC OBJECT OF ' + 
        'OFF OFFSETS OLD ON ONLY OPEN OPENDATASOURCE OPENQUERY OPENROWSET OPENXML OPERATION OPTION ' + 
        'ORDER ORDINALITY OUT OUTPUT OVER PAD PARAMETER PARAMETERS PARTIAL PATH PERCENT PLAN ' + 
        'POSTFIX PRECISION PREFIX PREORDER PREPARE PRESERVE PRIMARY PRINT PRIOR PRIVILEGES PROC PROCEDURE ' + 
        'PUBLIC RAISERROR READ READS READTEXT REAL RECONFIGURE RECURSIVE REF REFERENCES REFERENCING RELATIVE ' + 
        'REPLICATION RESTORE RESTRICT RESULT RETURN RETURNS REVOKE RIGHT ROLE ROLLBACK ROLLUP ROUTINE ROW ' + 
        'ROWGUIDCOL ROWS RULE SAVE SAVEPOINT SCHEMA SCOPE SCROLL SEARCH SECOND SECTION SELECT ' + 
        'SEQUENCE SESSION SESSION_USER SET SETS SETUSER SHUTDOWN SIZE SMALLINT SPACE SPECIFIC ' + 
        'SPECIFICTYPE SQL SQLEXCEPTION SQLSTATE SQLWARNING START STATE STATEMENT STATIC STATISTICS STRUCTURE ' + 
        'SYSTEM_USER TABLE TEMPORARY TERMINATE TEXTSIZE THAN THEN TIME TIMESTAMP TIMEZONE_HOUR TIMEZONE_MINUTE ' + 
        'TO TOP TRAILING TRAN TRANSACTION TRANSLATION TREAT TRIGGER TRUE TRUNCATE TRY TSEQUAL UNDER UNION ' + 
        'UNIQUE UNKNOWN UNNEST UPDATE UPDATETEXT USAGE USE USER USING VALUE VALUES VARCHAR VARIABLE ' + 
        'VARYING VIEW WAITFOR WHEN WHENEVER WHERE WHILE WITH WITHOUT WORK WRITE WRITETEXT YEAR ZONE ' + 
        'UNCOMMITTED NOCOUNT';

    var geshiKeywords2 = '@@DATEFIRST  @@OPTIONS  @@DBTS  @@REMSERVER  @@LANGID  @@SERVERNAME ' + 
        '@@LANGUAGE  @@SERVICENAME  @@LOCK_TIMEOUT  @@SPID  @@MAX_CONNECTIONS ' + 
        '@@TEXTSIZE  @@MAX_PRECISION  @@VERSION  @@NESTLEVEL ' + 
        '@@CURSOR_ROWS  @@FETCH_STATUS ' + 
        'DATEADD  DATEDIFF  DATENAME  DATEPART  GETDATE  GETUTCDATE ' + 
        'ABS  DEGREES  RAND  ACOS  EXP  ROUND  ASIN  FLOOR  SIGN ' + 
        'ATAN  LOG  SIN  ATN2  LOG10  SQUARE  CEILING  PI  SQRT  COS ' + 
        'POWER  TAN  COT  RADIANS ' + 
        'COL_LENGTH  COL_NAME  FULLTEXTCATALOGPROPERTY ' + 
        'COLUMNPROPERTY  FULLTEXTSERVICEPROPERTY  DATABASEPROPERTY  INDEX_COL ' + 
        'DATABASEPROPERTYEX  INDEXKEY_PROPERTY  DB_ID  INDEXPROPERTY  DB_NAME ' + 
        'OBJECT_ID  FILE_ID  OBJECT_NAME  FILE_NAME  OBJECTPROPERTY  FILEGROUP_ID ' + 
        '@@PROCID  FILEGROUP_NAME  SQL_VARIANT_PROPERTY  FILEGROUPPROPERTY ' + 
        'TYPEPROPERTY  FILEPROPERTY ' + 
        'IS_SRVROLEMEMBER  SUSER_SID  SUSER_SNAME  USER_ID ' + 
        'HAS_DBACCESS  IS_MEMBER ' + 
        'ASCII  SOUNDEX  PATINDEX  CHARINDEX  REPLACE  STR ' + 
        'DIFFERENCE  QUOTENAME  STUFF  REPLICATE  SUBSTRING  LEN ' + 
        'REVERSE  UNICODE  LOWER  UPPER  LTRIM  RTRIM ' + 
        'APP_NAME  COLLATIONPROPERTY  @@ERROR  FORMATMESSAGE ' + 
        'GETANSINULL  HOST_ID  HOST_NAME  IDENT_CURRENT  IDENT_INCR ' + 
        'IDENT_SEED  @@IDENTITY  ISDATE  ISNUMERIC  PARSENAME  PERMISSIONS ' + 
        '@@ROWCOUNT  ROWCOUNT_BIG  SCOPE_IDENTITY  SERVERPROPERTY  SESSIONPROPERTY ' + 
        'STATS_DATE  @@TRANCOUNT  USER_NAME ' + 
        '@@CONNECTIONS  @@PACK_RECEIVED  @@CPU_BUSY  @@PACK_SENT ' + 
        '@@TIMETICKS  @@IDLE  @@TOTAL_ERRORS  @@IO_BUSY ' + 
        '@@TOTAL_READ  @@PACKET_ERRORS  @@TOTAL_WRITE ' + 
        'TEXTPTR  TEXTVALID ' + 
        'AVG MAX BINARY_CHECKSUM MIN CHECKSUM SUM CHECKSUM_AGG ' + 
        'STDEV COUNT STDEVP COUNT_BIG VAR VARP';

    var geshiKeywords3 = 'sp_ActiveDirectory_Obj sp_ActiveDirectory_SCP ' + 
        'sp_column_privileges sp_special_columns sp_columns sp_sproc_columns ' + 
        'sp_databases sp_statistics sp_fkeys sp_stored_procedures sp_pkeys ' + 
        'sp_table_privileges sp_server_info sp_tables ' + 
        'sp_cursor_list sp_describe_cursor_columns sp_describe_cursor sp_describe_cursor_tables ' + 
        'sp_add_maintenance_plan sp_delete_maintenance_plan_db sp_add_maintenance_plan_db ' + 
        'sp_delete_maintenance_plan_job sp_add_maintenance_plan_job sp_help_maintenance_plan ' + 
        'sp_delete_maintenance_plan ' + 
        'sp_addlinkedserver sp_indexes sp_addlinkedsrvlogin sp_linkedservers sp_catalogs ' + 
        'sp_primarykeys sp_column_privileges_ex sp_columns_ex ' + 
        'sp_table_privileges_ex sp_tables_ex sp_foreignkeys ' + 
        'sp_fulltext_catalog sp_help_fulltext_catalogs_cursor sp_fulltext_column ' + 
        'sp_help_fulltext_columns sp_fulltext_database sp_help_fulltext_columns_cursor ' + 
        'sp_fulltext_service sp_help_fulltext_tables sp_fulltext_table ' + 
        'sp_help_fulltext_tables_cursor sp_help_fulltext_catalogs ' + 
        'sp_add_log_shipping_database sp_delete_log_shipping_database sp_add_log_shipping_plan ' + 
        'sp_delete_log_shipping_plan sp_add_log_shipping_plan_database ' + 
        'sp_delete_log_shipping_plan_database sp_add_log_shipping_primary ' + 
        'sp_delete_log_shipping_primary sp_add_log_shipping_secondary ' + 
        'sp_delete_log_shipping_secondary sp_can_tlog_be_applied sp_get_log_shipping_monitor_info ' + 
        'sp_change_monitor_role sp_remove_log_shipping_monitor sp_change_primary_role ' + 
        'sp_resolve_logins sp_change_secondary_role sp_update_log_shipping_monitor_info ' + 
        'sp_create_log_shipping_monitor_account sp_update_log_shipping_plan ' + 
        'sp_define_log_shipping_monitor sp_update_log_shipping_plan_database ' + 
        'sp_OACreate sp_OAMethod sp_OADestroy sp_OASetProperty sp_OAGetErrorInfo ' + 
        'sp_OAStop sp_OAGetProperty ' + 
        'sp_add_agent_parameter sp_enableagentoffload sp_add_agent_profile ' + 
        'sp_enumcustomresolvers sp_addarticle sp_enumdsn sp_adddistpublisher ' + 
        'sp_enumfullsubscribers sp_adddistributiondb sp_expired_subscription_cleanup ' + 
        'sp_adddistributor sp_generatefilters sp_addmergealternatepublisher ' + 
        'sp_getagentoffloadinfo sp_addmergearticle sp_getmergedeletetype sp_addmergefilter ' + 
        'sp_get_distributor sp_addmergepublication sp_getqueuedrows sp_addmergepullsubscription ' + 
        'sp_getsubscriptiondtspackagename sp_addmergepullsubscription_agent sp_grant_publication_access ' + 
        'sp_addmergesubscription sp_help_agent_default sp_addpublication sp_help_agent_parameter ' + 
        'sp_addpublication_snapshot sp_help_agent_profile sp_addpublisher70 sp_helparticle ' + 
        'sp_addpullsubscription sp_helparticlecolumns sp_addpullsubscription_agent sp_helparticledts ' + 
        'sp_addscriptexec sp_helpdistpublisher sp_addsubscriber sp_helpdistributiondb ' + 
        'sp_addsubscriber_schedule sp_helpdistributor sp_addsubscription sp_helpmergealternatepublisher ' + 
        'sp_addsynctriggers sp_helpmergearticle sp_addtabletocontents sp_helpmergearticlecolumn ' + 
        'sp_adjustpublisheridentityrange sp_helpmergearticleconflicts sp_article_validation ' + 
        'sp_helpmergeconflictrows sp_articlecolumn sp_helpmergedeleteconflictrows sp_articlefilter ' + 
        'sp_helpmergefilter sp_articlesynctranprocs sp_helpmergepublication sp_articleview ' + 
        'sp_helpmergepullsubscription sp_attachsubscription sp_helpmergesubscription sp_browsesnapshotfolder ' + 
        'sp_helppublication sp_browsemergesnapshotfolder sp_help_publication_access sp_browsereplcmds ' + 
        'sp_helppullsubscription sp_change_agent_parameter sp_helpreplfailovermode sp_change_agent_profile ' + 
        'sp_helpreplicationdboption sp_changearticle sp_helpreplicationoption sp_changedistpublisher ' + 
        'sp_helpsubscriberinfo sp_changedistributiondb sp_helpsubscription sp_changedistributor_password ' + 
        'sp_ivindexhasnullcols sp_changedistributor_property sp_helpsubscription_properties sp_changemergearticle ' + 
        'sp_link_publication sp_changemergefilter sp_marksubscriptionvalidation sp_changemergepublication ' + 
        'sp_mergearticlecolumn sp_changemergepullsubscription sp_mergecleanupmetadata sp_changemergesubscription ' + 
        'sp_mergedummyupdate sp_changepublication sp_mergesubscription_cleanup sp_changesubscriber ' + 
        'sp_publication_validation sp_changesubscriber_schedule sp_refreshsubscriptions sp_changesubscriptiondtsinfo ' + 
        'sp_reinitmergepullsubscription sp_changesubstatus sp_reinitmergesubscription sp_change_subscription_properties ' + 
        'sp_reinitpullsubscription sp_check_for_sync_trigger sp_reinitsubscription sp_copymergesnapshot ' + 
        'sp_removedbreplication sp_copysnapshot sp_repladdcolumn sp_copysubscription sp_replcmds ' + 
        'sp_deletemergeconflictrow sp_replcounters sp_disableagentoffload sp_repldone sp_drop_agent_parameter ' + 
        'sp_repldropcolumn sp_drop_agent_profile sp_replflush sp_droparticle sp_replicationdboption ' + 
        'sp_dropanonymouseagent sp_replication_agent_checkup sp_dropdistpublisher sp_replqueuemonitor ' + 
        'sp_dropdistributiondb sp_replsetoriginator sp_dropmergealternatepublisher sp_replshowcmds ' + 
        'sp_dropdistributor sp_repltrans sp_dropmergearticle sp_restoredbreplication sp_dropmergefilter ' + 
        'sp_revoke_publication_access sp_scriptsubconflicttable sp_dropmergepublication sp_script_synctran_commands ' + 
        'sp_dropmergepullsubscription sp_setreplfailovermode sp_showrowreplicainfo sp_dropmergesubscription ' + 
        'sp_subscription_cleanup sp_droppublication sp_table_validation sp_droppullsubscription ' + 
        'sp_update_agent_profile sp_dropsubscriber sp_validatemergepublication sp_dropsubscription ' + 
        'sp_validatemergesubscription sp_dsninfo sp_vupgrade_replication sp_dumpparamcmd ' + 
        'sp_addalias sp_droprolemember sp_addapprole sp_dropserver sp_addgroup sp_dropsrvrolemember ' + 
        'sp_dropuser sp_addlogin sp_grantdbaccess sp_addremotelogin ' + 
        'sp_grantlogin sp_addrole sp_helpdbfixedrole sp_addrolemember sp_helpgroup ' + 
        'sp_addserver sp_helplinkedsrvlogin sp_addsrvrolemember sp_helplogins sp_adduser ' + 
        'sp_helpntgroup sp_approlepassword sp_helpremotelogin sp_changedbowner sp_helprole ' + 
        'sp_changegroup sp_helprolemember sp_changeobjectowner sp_helprotect sp_change_users_login ' + 
        'sp_helpsrvrole sp_dbfixedrolepermission sp_helpsrvrolemember sp_defaultdb sp_helpuser ' + 
        'sp_defaultlanguage sp_MShasdbaccess sp_denylogin sp_password sp_dropalias sp_remoteoption ' + 
        'sp_dropapprole sp_revokedbaccess sp_dropgroup sp_revokelogin sp_droplinkedsrvlogin ' + 
        'sp_setapprole sp_droplogin sp_srvrolepermission sp_dropremotelogin sp_validatelogins sp_droprole ' + 
        'sp_processmail xp_sendmail xp_deletemail xp_startmail xp_findnextmsg xp_stopmail xp_readmail ' + 
        'sp_trace_create sp_trace_setfilter sp_trace_generateevent sp_trace_setstatus sp_trace_setevent ' + 
        'sp_add_alert sp_help_jobhistory sp_add_category sp_help_jobschedule sp_add_job ' + 
        'sp_help_jobserver sp_add_jobschedule sp_help_jobstep sp_add_jobserver sp_help_notification ' + 
        'sp_add_jobstep sp_help_operator sp_add_notification sp_help_targetserver ' + 
        'sp_add_operator sp_help_targetservergroup sp_add_targetservergroup sp_helptask ' + 
        'sp_add_targetsvrgrp_member sp_manage_jobs_by_login sp_addtask sp_msx_defect ' + 
        'sp_apply_job_to_targets sp_msx_enlist sp_delete_alert sp_post_msx_operation ' + 
        'sp_delete_category sp_purgehistory sp_delete_job sp_purge_jobhistory sp_delete_jobschedule ' + 
        'sp_reassigntask sp_delete_jobserver sp_remove_job_from_targets sp_delete_jobstep ' + 
        'sp_resync_targetserver sp_delete_notification sp_start_job sp_delete_operator ' + 
        'sp_stop_job sp_delete_targetserver sp_update_alert sp_delete_targetservergroup ' + 
        'sp_update_category sp_delete_targetsvrgrp_member sp_update_job sp_droptask ' + 
        'sp_update_jobschedule sp_help_alert sp_update_jobstep sp_help_category ' + 
        'sp_update_notification sp_help_downloadlist sp_update_operator sp_helphistory ' + 
        'sp_update_targetservergroup sp_help_job sp_updatetask xp_sqlagent_proxy_account ' + 
        'sp_add_data_file_recover_suspect_db sp_helpconstraint sp_addextendedproc ' + 
        'sp_helpdb sp_addextendedproperty sp_helpdevice sp_add_log_file_recover_suspect_db ' + 
        'sp_helpextendedproc sp_addmessage sp_helpfile sp_addtype sp_helpfilegroup ' + 
        'sp_addumpdevice sp_helpindex sp_altermessage sp_helplanguage sp_autostats ' + 
        'sp_helpserver sp_attach_db sp_helpsort sp_attach_single_file_db sp_helpstats ' + 
        'sp_bindefault sp_helptext sp_bindrule sp_helptrigger sp_bindsession ' + 
        'sp_indexoption sp_certify_removable sp_invalidate_textptr sp_configure ' + 
        'sp_lock sp_create_removable sp_monitor sp_createstats sp_procoption ' + 
        'sp_cycle_errorlog sp_recompile sp_datatype_info sp_refreshview sp_dbcmptlevel ' + 
        'sp_releaseapplock sp_dboption sp_rename sp_dbremove sp_renamedb ' + 
        'sp_delete_backuphistory sp_resetstatus sp_depends sp_serveroption sp_detach_db ' + 
        'sp_setnetname sp_dropdevice sp_settriggerorder sp_dropextendedproc sp_spaceused ' + 
        'sp_dropextendedproperty sp_tableoption sp_dropmessage sp_unbindefault sp_droptype ' + 
        'sp_unbindrule sp_executesql sp_updateextendedproperty sp_getapplock sp_updatestats ' + 
        'sp_getbindtoken sp_validname sp_help sp_who ' + 
        'sp_dropwebtask sp_makewebtask sp_enumcodepages sp_runwebtask ' + 
        'sp_xml_preparedocument sp_xml_removedocument ' + 
        'xp_cmdshellxp_logininfo xp_enumgroups xp_msver xp_findnextmsgxp_revokelogin ' + 
        'xp_grantlogin xp_sprintf xp_logevent xp_sqlmaint xp_loginconfig xp_sscanf ' + 
        'sp_cursor sp_cursorclose sp_cursorexecute sp_cursorfetch sp_cursoropen ' + 
        'sp_cursoroption sp_cursorprepare sp_cursorunprepare sp_execute sp_prepare sp_unprepare ' + 
        'sp_createorphan sp_droporphans sp_reset_connection sp_sdidebug';

    var geshiKeywords4 = 'fn_helpcollations fn_listextendedproperty  fn_servershareddrives ' + 
        'fn_trace_geteventinfo fn_trace_getfilterinfo fn_trace_getinfo ' + 
        'fn_trace_gettable fn_virtualfilestats fn_listextendedproperty';

        this.regexList = [
        // REM Comments
        {   regex: /(^::|rem).*$/gmi,                               css: 'comments'},
        // "Strings", 'Strings ' + `Strings`, ECHO String
        {   regex: SyntaxHighlighter.regexLib.doubleQuotedString,   css: 'string'},
        {   regex: SyntaxHighlighter.regexLib.singleQuotedString,   css: 'string'},
        {   regex: /`(?:\.|(\\\`)|[^\``\n])*`/g,                    css: 'string'},
        {   regex: /echo.*$/gmi,                                    css: 'string'},
        // :Labels
        {   regex: /^:.+$/gmi,                                      css: 'color3'},
        // %Variables%, !Variables!
        {   regex: /(%|!)\w+\1/gmi,                                 css: 'variable'},
        // %%a variable Refs, %1 variable Refs
        {   regex: /%\*|%%?~?[fdpnxsatz]*[0-9a-z]\b/gmi,            css: 'variable'},
        // geshi
        {   regex: new RegExp(this.getKeywords(geshiKeywords1), 'gmi'),   css: 'postgres1'},
        {   regex: new RegExp(this.getKeywords(geshiKeywords2), 'gmi'),   css: 'postgres2'},
        {   regex: new RegExp(this.getKeywords(geshiKeywords3), 'gmi'),   css: 'postgres3'},
        {   regex: new RegExp(this.getKeywords(geshiKeywords4), 'gmi'),   css: 'postgres4'}
    ];
};

SyntaxHighlighter.brushes.PostgreSQL.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.PostgreSQL.aliases = ['postgres'];
